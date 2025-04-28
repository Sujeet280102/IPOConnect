import { ApiError } from '../utils/api-error.js'
import { ApiResponse } from '../utils/api-response.js'
import { db } from "../libs/db.js"

export const registerSectorData = async (req, res ) => {

    const {sectorName, sectorDesc, sectorType } = req.body

    if(!sectorName || !sectorDesc || !sectorType) {
        return res.status(400).json(new ApiError())
    }

    try {
        const existingSector = await db.allSector.findUnique({where: {sectorName}})

        if(existingSector){
            return res.status(401).json(new ApiError(401, "Sector already exists"))
        }

        const newSector = await db.allSector.create({
            data: {
                sectorName,
                sectorDesc,
                sectorType
            }
        })

        return res.status(201).json(new ApiResponse(201, {newSector}, "Sector data registered successfully"))
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Sector not found"))
    }
}

export const updateSectorData = async (req, res) => {
    const {sectorName} = req.params;

    const {sectorDesc, sectorType} = req.body

    if(!sectorName){
        return res.status(404).json(new ApiError(404, "Sector name not provided"))
    }

    try {
        const existingSector = await db.allSector.findUnique({where: {sectorName}})

        if(!existingSector) {
            return res.status(401).json(new ApiError(401, "Sector not exists"))
        }
        
        const updatedSector  = await db.allSector.update({
            where: {sectorName},
            data: {
                sectorName: sectorName || existingSector.sectorName,
                sectorDesc: sectorDesc || existingSector.sectorDesc,
                sectorType: sectorType || existingSector.sectorType
            }
        })
        console.log("reached ");

        return res.status(201).json(new ApiResponse(201, {updatedSector}, "Sector data updated"))
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Not updated sector"))        
    }
}