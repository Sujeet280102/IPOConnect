import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { db } from "../libs/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserRole } from "../generated/prisma/index.js";

export const registerUser = async (req, res) => {
  const { name, email, password, phone} = req.body;

  if (!email || !name || !password || !phone) {
    return res.status(400).json(new ApiError(400, "All fields are required"));
  }

  try {
    const existingUser = await db.user.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(409).json(new ApiError(409, "User already exists"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        phone,
        role: UserRole.USER,
      },
    });

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const cookieOptions = {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    };

    res.cookie("token", token, cookieOptions);

    return res
      .status(201)
      .json(
        new ApiResponse(201, { user: newUser }, "User created successfully")
      );
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json(new ApiError(500, "Error creating user"));
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json(new ApiError(201, "email or password is required"));
  }

  try {
    const user = await db.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(401).json(new ApiError(401, "User not registered"));
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(404).json(new ApiError(401, "Invalid Credentials"));
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const cookieOptions = {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    };

    res.cookie("token", token, cookieOptions);

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { user: { name: user.name, id: user.id } },
          "User logged in successfully"
        )
      );
  } catch (error) {
    return res.status(500).json(new ApiError(500, "Login error"));
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    res.status(200).json(new ApiResponse(200, "User logged out successfully"));
  } catch (error) {
    return res.status(500).json(new ApiError(500, "Error logging out"));
  }
};

export const check = async (req, res) => {
  try {
    res
      .status(200)
      .json(new ApiResponse(200, "User authenticated successfully"));
  } catch (error) {
    console.error("Error", error);
    res.status(500).json(new ApiError(500, "Error checking user", error));
  }
};
