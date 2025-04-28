import {Router} from 'express'
import { createSharkInvestor, getAllSharkInvestor, getSharkInvestor, updateSharkInvestor } from '../controllers/sharkInvestor.controller.js';

const router = Router()

router.post("/sharkinvestor", createSharkInvestor)
router.get("/sharkinvestor/allshark", getAllSharkInvestor)
router.put("/sharkinvestor/:sharkName", updateSharkInvestor)
router.get("/sharkinvestor/:sharkName", getSharkInvestor)

export default router;