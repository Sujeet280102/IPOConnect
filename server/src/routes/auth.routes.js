import { Router } from "express";
import { check, loginUser, logoutUser, registerUser } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { userLoginValidator, userRegistrationValidator } from "../validator/index.js";
import { validate } from "../middlewares/validate.middleware.js";

const authRoutes = Router();

authRoutes.post("/register", userRegistrationValidator(), validate, registerUser);

authRoutes.post("/login", userLoginValidator(), validate, loginUser);

authRoutes.get("/logout",authMiddleware, logoutUser);

authRoutes.get("/check", authMiddleware, check);

export default authRoutes;
