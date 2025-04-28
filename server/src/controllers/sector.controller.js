import {ApiError} from '../utils/api-error.js'
import {ApiResponse} from '../utils/api-response.js'
import {db} from '../libs/db.js'

export const createSector = async (req, res) => {
    const {sectorName, sectorDesc, largeCap, midCap, smallCap, marketInsights, opportunities} = req.body 

    if(!sectorName || !sectorDesc){
        return res.status(400).json(new ApiError(400, "sector name and description is required"))
    }

    try {
        const existingSector = await db.sector.findUnique({ where: {sectorName} })
        if(existingSector){
            return res.status(404).json(new ApiError(404, "Sector not exists"))
        }

        const newSectorData = await db.sector.create({
            data: {
                sectorName, sectorDesc, largeCap, midCap, smallCap, marketInsights, opportunities
            }
        })

        return res.status(201).json(new ApiResponse(201, {newSectorData}, "Sector created successfully"))
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Sector not created"))
    }
}

export const updateSector = async (req, res) => {

    let { sectorName } = req.params
    sectorName = sectorName.replace(/-/g, " ");

    const { sectorDesc, largeCap, midCap, smallCap, marketInsights, opportunities } = req.body

    try {
        const existingSector = await db.sector.findUnique({ where: {sectorName} })
        if(!existingSector){
            return res.status(404).json(new ApiError(404, "Sector not exists"))
        }

        const updateSectorData = await db.sector.update({
            where: {sectorName},
            data: {
                sectorDesc: sectorDesc || existingSector.sectorDesc,
                largeCap: largeCap || existingSector.largeCap,
                midCap: midCap || existingSector.midCap, 
                smallCap: smallCap || existingSector.smallCap,
                marketInsights: marketInsights || existingSector.marketInsights,
                opportunities: opportunities || existingSector.opportunities
            }
        })

        return res.status(201).json(new ApiResponse(201, {updateSectorData}, "Sector data updated"))
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Sector not updated"))
    }
}

export const deleteSector = async (req, res) => {
    let { sectorName } = req.params
    sectorName = sectorName.replace(/-/g, " ")

    try {
        const existingSector = await db.sector.findUnique({ where: {sectorName} })
        if(!existingSector){
            return res.status(404).json(new ApiError(404, "Sector not exists"))
        }

        await db.sector.delete({ where: {sectorName} })
        return res.status(200).json(new ApiResponse(200, {}, "Sector deleted successfully"))
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Sector not deleted"))
    }
}

export const getAllSector = async (req, res) => {
    try {
        const allSectorData = await db.sector.findMany({
            orderBy: {sectorName: "asc"}
        })

        return res.status(201).json(new ApiResponse(201, {allSectorData}, "Fetched all sector data"))
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Sector data not fetched"))
    }
}

export const getSpecificSector = async (req, res) => {
    let { sectorName } = req.params
    sectorName = sectorName.replace(/-/g, " ")

    try {
        const existingSector = await db.sector.findUnique({ where: {sectorName} })
        if(!existingSector){
            return res.status(404).json(new ApiError(404, "specific sector not exists"))
        }

        return res.status(200).json(new ApiResponse(200, {existingSector}, "Specific sector data fetched"))
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Specific sector data not fetched"))
    }
}