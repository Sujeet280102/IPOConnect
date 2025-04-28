import { Router } from 'express'
import { registerSectorData, updateSectorData } from '../controllers/allsector.controller.js'

const router = Router()

router.post("/allsector", registerSectorData)
router.put("/allsector/:sectorName", updateSectorData)
// router.delete("/allsector/:sectorName", registerSectorData)

export default router;