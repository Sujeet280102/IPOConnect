import {Router} from "express"
import { deleteOngoingIPO, getAllOngoingIPo, registerOngoingIPO, updateOngoingIPO } from "../controllers/ongoingIpo.controller.js";

const router = Router();

router.post("/ongoing-ipo", registerOngoingIPO)
router.put("/ongoing-ipo/:name", updateOngoingIPO)
router.delete("/ongoing-ipo/:name", deleteOngoingIPO)
router.get("/ongoing-ipos", getAllOngoingIPo)

export default router;