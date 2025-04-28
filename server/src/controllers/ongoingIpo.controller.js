import { db } from "../libs/db.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";

export const registerOngoingIPO = async (req, res) => {
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
    const existingOngoingIPO = await db.ongoingIpo.findUnique({
      where: { name },
    });
    if (existingOngoingIPO) {
      return res.status(400).json(new ApiError(400, "IPO already exists"));
    }

    const newOngoingIPO = await db.ongoingIpo.create({
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
          "Ongoing IPO created successfully"
        )
      );
  } catch (error) {
    return res.status(500).json(new ApiError(500, "Ongoing ipo not created"));
  }
};

export const updateOngoingIPO = async (req, res) => {
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
    const existingOngoingIPO = await db.ongoingIpo.findUnique({
      where: { name },
    });

    if (!existingOngoingIPO) {
      return res.status(404).json(new ApiError(404, "Onoging IPO not found"));
    }

    const newOngoingIPO = await db.ongoingIpo.update({
      where: { name },
      data: {
        priceBand: priceBand || existingOngoingIPO.priceBand,
        openDate: openDate || existingOngoingIPO.openDate,
        closeDate: closeDate || existingOngoingIPO.closeDate,
        issueSize: issueSize || existingOngoingIPO.issueSize,
        issueType: issueType || existingOngoingIPO.issueType,
        listingDate: listingDate || existingOngoingIPO.listingDate,
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { ongoingIPO: newOngoingIPO },
          "Ongoing IPO updated successfully"
        )
      );
  } catch (error) {
    return res.status(500).json(new ApiError(500, "Ongoing IPO not updated"));
  }
};

export const deleteOngoingIPO = async (req, res) => {
  const { name } = req.params;

  if (!name) {
    return res
      .status(400)
      .json(new ApiError(400, "Ongoing IPO name is required"));
  }

  try {

    const existingOngoingIPO = await db.ongoingIpo.findUnique({
      where: { name },
    });

    if (!existingOngoingIPO) {
      return res
        .status(404)
        .json(new ApiError(404, "Ongoing IPO not found"));
    }

    await db.ongoingIpo.delete({ where: { name } });

    return res
      .status(200)
      .json(new ApiResponse(200, {}, `Ongoing IPO deleted successfully`));
  } catch (error) {

    return res
      .status(500)
      .json(new ApiError(500, "Ongoing IPO not deleted"));
  }
};

export const getAllOngoingIPo = async (req, res) => {
  try {
    const existingOngoingIPO = await db.ongoingIpo.findMany({ 
      orderBy: { openDate: "asc"}
    })
  
    return res.status(201).json(new ApiResponse(201, {existingOngoingIPO}, "Fetched all ongoing ipos"))
  } catch (error) {
    return res.status(500).json(new ApiError(500, "Not feched"))
  }
}