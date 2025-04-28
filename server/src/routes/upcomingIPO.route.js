import { Router } from "express";
import { 
  registerUpcomingIpo, 
  updateUpcomingIpo, 
  deleteUpcomingIpo, 
  getAllUpcomingIpos
} from "../controllers/upcomingIpo.controller.js";

const router = Router();

router.post("/upcoming-ipo", registerUpcomingIpo);
router.put("/upcoming-ipo/:name", updateUpcomingIpo);
router.delete("/upcoming-ipo/:name", deleteUpcomingIpo);
router.get("/upcoming-ipos", getAllUpcomingIpos);

export default router;
