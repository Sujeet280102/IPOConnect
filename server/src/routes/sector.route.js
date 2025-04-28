import { Router } from "express";
import { createSector, deleteSector, getAllSector, getSpecificSector, updateSector } from "../controllers/sector.controller.js";

const router = Router();

router.post("/sector", createSector)
router.put("/sector/:sectorName", updateSector)
router.delete("/sector/:sectorName", deleteSector)
router.get("/sectors", getAllSector)
router.get("/sector/:sectorName", getSpecificSector)

export default router;