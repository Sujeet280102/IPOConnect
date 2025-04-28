import { db } from "../libs/db.js"
import { ApiError } from "../utils/api-error.js"
import { ApiResponse } from "../utils/api-response.js"

export const createBlog = async (req, res) => { 

    const {heading, image, publishDate, link} = req.body

    if(!heading || !image || !link){
        return res.status(404).json(new ApiError(404, "All field are required"))
    }

    try {

        const existingBlog = await db.blog.findUnique({where: {heading}})
        if(existingBlog){
            return res.status(400).json(new ApiError(400, "Blog already created"))
        }

        const newBlog = await db.blog.create({
            data: {
                heading, image, publishDate, link
            }
        })

        return res.status(201).json(new ApiResponse(201, {newBlog}, "Blog created"))

    } catch (error) {
        return res.status(500).json(new ApiError(500, "Blog not created"))
    }
}

export const updateBlog = async (req, res) => {
    const {heading} = req.params

    const {image, link} = req.body

    try {

        const existingBlog = await db.blog.findUnique({where: {heading}})
        if(!existingBlog){
            return res.status(400).json(400, "Blog not exists")
        }

        const updateBlog = await db.blog.update({
            where: {heading},
            data: {
                heading: heading || existingBlog.heading,
                image: image || existingBlog.image,
                link: link || existingBlog.link
            }
        })

        return res.status(201).json(new ApiResponse(201, {updateBlog}, "Blog updated successfully"))

    } catch (error) {
        return res.status(500).json(500, "Blog not updated")
    }
}

export const deleteBlog = async (req, res) => {
    const { heading } = req.params

    try {

        const existingBlog = await db.blog.findUnique({ where: { heading } })
        if(!existingBlog){
            return res.status(404).json(new ApiError(404, "Blog not found"))
        }

        await db.blog.delete({ where: { heading } })

        return res.status(200).json(new ApiResponse(200, {}, "Blog deleted successfully"))

    } catch (error) {
        return res.status(500).json(new ApiError(500, "Blog not deleted"))
    }
}

export const getAllBlog = async (req, res) => {
    try {
        const allBlog = await db.blog.findMany({
            orderBy: {heading: "asc"}
        })

        return res.status(201).json(new ApiResponse(201, { allBlog }, "Blog data fetched"))
    } catch (error) {
        return res.status(500).json(new ApiError(500, "Blog not fetched"))
    }
}