import { db } from "../libs/db.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";

export const registerUpcomingIpo = async (req, res) => {
  const {
    name,
    priceBand,
    openDate,
    closeDate,
    issueSize,
    issueType,
    listingDate,
  } = req.body;

  if (
    !name ||
    !priceBand ||
    !openDate ||
    !closeDate ||
    !issueSize ||
    !issueType ||
    !listingDate
  ) {
    return res.status(400).json(new ApiError(400, "All field are required"));
  }

  try {

    const existingIPO = await db.upcomingIpo.findUnique({ where: { name } });
    if (existingIPO) {
      return res.status(400).json(new ApiError(400, "IPO already exists"));
    }

    const newUpcomingIPo = await db.upcomingIpo.create({
      data: {
        name,
        openDate,
        closeDate,
        priceBand,
        issueSize,
        issueType,
        listingDate,
      },
    });

    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          { upcomingipo: newUpcomingIPo },
          "Upcoming IPO registered successfully"
        )
      );
  } catch (error) {
    return res
      .status(500)
      .json(new ApiError(500, "Upcoming IPO not registered", error));
  }
};

export const updateUpcomingIpo = async (req, res) => {
  const { name } = req.params;
  const { priceBand, openDate, closeDate, issueSize, issueType, listingDate } =
    req.body;

  if (!name) {
    return res.status(400).json(new ApiError(400, "Upcoming IPO not exists"));
  }

  try {
    const existingIPO = await db.upcomingIpo.findUnique({ where: { name } });

    if (!existingIPO) {
      return res.status(404).json(new ApiError(404, "Upcoming IPO not found"));
    }

    const updatedIPO = await db.upcomingIpo.update({
      where: { name },
      data: {
        priceBand: priceBand || existingIPO.priceBand,
        openDate: openDate || existingIPO.openDate,
        closeDate: closeDate || existingIPO.closeDate,
        issueSize: issueSize || existingIPO.issueSize,
        issueType: issueType || existingIPO.issueType,
        listingDate: listingDate || existingIPO.listingDate,
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { upcomingipo: updatedIPO },
          "Upcoming IPO updated successfully"
        )
      );
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(new ApiError(500, "Failed to update upcoming IPO"));
  }
};

export const deleteUpcomingIpo = async (req, res) => {
  
  const { name } = req.params;

  if (!name) {
    return res
      .status(400)
      .json(new ApiError(400, "Upcoming IPO name is required"));
  }

  try {
    const existingIPO = await db.upcomingIpo.findUnique({ where: { name } });

    if (!existingIPO) {
      return res.status(404).json(new ApiError(404, "Upcoming IPO not found"));
    }

    await db.upcomingIpo.delete({ where: { name } });

    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Upcoming IPO deleted successfully"));
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(new ApiError(500, "Failed to delete upcoming IPO"));
  }
};

export const getAllUpcomingIpos = async (req, res) => {
  try {
    const upcomingIpos = await db.upcomingIpo.findMany({
      orderBy: { openDate: "asc" },
    });

    return res
      .status(200)
      .json(new ApiResponse(200,{ upcomingIpos },"Upcoming IPOs fetched successfully" ));
  } catch (error) {
    console.error(error);
    return res.status(500)
      .json(new ApiError(500, "Failed to fetch upcoming IPOs"));
  }
};
