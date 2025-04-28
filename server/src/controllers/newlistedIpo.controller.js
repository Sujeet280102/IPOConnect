import { db } from "../libs/db.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";

export const registerNewlistedIPO = async (req, res) => {
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
    const existingOngoingIPO = await db.newListedIpo.findUnique({
      where: { name },
    });
    if (existingOngoingIPO) {
      return res.status(400).json(new ApiError(400, "IPO already exists"));
    }

    const newOngoingIPO = await db.newListedIpo.create({
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
      .status(200)
      .json(
        new ApiResponse(
          200,
          { ongoingIpo: newOngoingIPO },
          "Newlisted IPO created successfully"
        )
      );
  } catch (error) {
    return res.status(500).json(new ApiError(500, "Newlisted ipo not created"));
  }
};

export const updateNewlistedIPO = async (req, res) => {
  const { name } = req.params;

  const { priceBand, openDate, closeDate, issueSize, issueType, listingDate } =
    req.body;

  if (
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
    const existingIPO = await db.newListedIpo.findUnique({
      where: { name },
    });

    if (!existingIPO) {
      return res.status(404).json(new ApiError(404, "Newlisted IPO not found"));
    }

    const newListedIPO = await db.newListedIpo.update({
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
          { ongoingIPO: newListedIPO },
          "Newlisted IPO updated successfully"
        )
      );
  } catch (error) {
    return res.status(500).json(new ApiError(500, "Newlisted IPO not updated"));
  }
};

export const deleteNewlistedIPO = async (req, res) => {
  const { name } = req.params;

  if (!name) {
    return res
      .status(400)
      .json(new ApiError(400, "Ongoing IPO name is required"));
  }

  try {

    const existingIPO = await db.newListedIpo.findUnique({
      where: { name },
    });

    if (!existingIPO) {
      return res
        .status(404)
        .json(new ApiError(404, "Newlisted IPO not found"));
    }

    await db.newListedIpo.delete({ where: { name } });

    return res
      .status(200)
      .json(new ApiResponse(200, {}, `Newlisted IPO deleted successfully`));
  } catch (error) {

    return res
      .status(500)
      .json(new ApiError(500, "Newlisted IPO not deleted"));
  }
};

export const getAllNewlistedIPO = async (req, res) => {
  try {
    const existingNewlistedIPO = await db.newListedIpo.findMany({ 
      orderBy: { openDate: "asc"}
    })
  
    return res.status(201).json(new ApiResponse(201, {existingNewlistedIPO}, "Fetched all newlisted ipos"))
  } catch (error) {
    return res.status(500).json(new ApiError(500, "Not feched"))
  }
}