import { db } from "../libs/db.js"
import { ApiError } from "../utils/api-error.js"
import { ApiResponse } from '../utils/api-response.js'

export const createSharkInvestor = async (req, res) => {
    const {image, sharkName, description, netWorth, portfolio, sectorFocus, stageFocus, 
        notableInvestments, achievements, link } = req.body 

    if(!image || !sharkName || !description){
        return res.status(404).json(new ApiError(404, "image, sharkName, or description is required"))
    }

    try {

        const existingSharkName = await db.sharkInvestor.findUnique({ where: {sharkName} })
        if(existingSharkName){
            return res.status(400).json(new ApiError(400, "Shark Investor already exists"))
        }

        const newSharkInvestor = await db.sharkInvestor.create({
            data: {
                image, sharkName, description, netWorth, portfolio, sectorFocus, stageFocus,
                notableInvestments, achievements, link
                }
        })

        return res.status(201).json(new ApiResponse(201, {newSharkInvestor}, "Shark Investor created"))

    } catch (error) {
        return res.status(500).json(new ApiError(500, "Shark investor not created"))
    }
}

export const getAllSharkInvestor = async (req, res) => {
    try {
        const allSharkInvestor = await db.sharkInvestor.findMany({ orderBy: {sharkName: "asc"} })

        const sharkData = allSharkInvestor.map(investor => ({
                id: investor.id,
                image: investor.image,
                sharkName: investor.sharkName,
                netWorth: investor.netWorth
        }))

        return res.status(200).json(new ApiResponse(200, {allSharkInvestor: sharkData}, "All shark investors fetched successfully"))
    } catch (error) {
        return res.status(500).json(500, "All shark data not fetched")
    }
}

export const updateSharkInvestor = async (req, res) => {

    let { sharkName } = req.params;
    sharkName = sharkName.replace(/-/g, ' ');

    const {description, netWorth, portfolio, sectorFocus, stageFocus, 
            notableInvestments, achievements, link } = req.body;

    try {
        
        const existingSharkName = await db.sharkInvestor.findUnique({
            where: { sharkName }
        });

        console.log(existingSharkName);
        

        if (!existingSharkName) {
            return res.status(400).json(new ApiError(400, "Shark investor does not exist"));
        }

        // Update the shark investor with new data if provided
        const updatedSharkInvestor = await db.sharkInvestor.update({
            where: { sharkName },
            data: {
                description: description || existingSharkName.description,
                netWorth: netWorth || existingSharkName.netWorth,
                portfolio: portfolio || existingSharkName.portfolio,
                sectorFocus: sectorFocus || existingSharkName.sectorFocus,
                stageFocus: stageFocus || existingSharkName.stageFocus,
                notableInvestments: notableInvestments || existingSharkName.notableInvestments,
                achievements: achievements || existingSharkName.achievements,
                link: link || existingSharkName.link
            }
        });
        console.log("reached");
        
        return res.status(200).json(new ApiResponse(200, { updatedSharkInvestor }, 
            "Shark investor updated successfully"));

    } catch (error) {
        console.error("Error updating shark investor:", error);
        return res.status(500).json(new ApiError(500, "Shark investor not updated", error));
    }
};

export const getSharkInvestor = async (req, res) => {
    let { sharkName } = req.params;
  
    // Convert 'aman-gupta' → 'aman gupta'
    sharkName = sharkName.replace(/-/g, ' ');
  
    try {
        const sharkInvestor = await db.sharkInvestor.findUnique({where: { sharkName }});
  
        if (!sharkInvestor) {
            return res.status(404).json(new ApiError(404, "Shark investor not found"));
        }
  
        return res.status(200).json(new ApiResponse(200, { sharkInvestor }, "Shark investor fetched"));
  
        } catch (error) {
            return res.status(500).json(new ApiError(500, "Server Error"));
        }
  };