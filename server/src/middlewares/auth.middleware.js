import jwt from 'jsonwebtoken'
import { ApiError } from '../utils/api-error.js'
import { db } from '../libs/db.js'

export const authMiddleware = async(req, res, next) => {
    try {
        const token = req.cookies.token

        if(!token){
            return res.status(401).json(new ApiError(401, "Unauthorised - No token"))
        }

        let decoded;

        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET)


            
        } catch (error) {
            return res.status(401).json(new ApiError(401, "Invalid token"))
        }

        const user = await db.user.findUnique({
            where: {id: decoded.id},
            select:{
                id: true,
                name: true,
                email: true,
                role: true
            }
        })

        if(!user){
            return res.status(404).json( new ApiError(404, "User not found"))
        }

        req.user = user;
        next();
        
    } catch (error) {
        console.log("Error auth", error);
        return res.status(500).json( new ApiError(500, "Error authenticated user"))
    }
}