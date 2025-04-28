import {Router} from "express"

import { deleteNewlistedIPO, getAllNewlistedIPO, registerNewlistedIPO, updateNewlistedIPO } from "../controllers/newlistedIpo.controller.js";

const router = Router();

router.post("/newlisted-ipo", registerNewlistedIPO)
router.put("/newlisted-ipo/:name", updateNewlistedIPO)
router.delete("/newlisted-ipo/:name", deleteNewlistedIPO)
router.get("/newlisted-ipos", getAllNewlistedIPO)

export default router;