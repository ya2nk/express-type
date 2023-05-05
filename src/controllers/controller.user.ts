import { Request,Response,NextFunction } from "express";
import asyncHandler from 'express-async-handler'
import { User } from '../models/user.model'

export const getAllUser = asyncHandler(async (req:Request,res:Response) => {
    const users = await User.find()
    res.status(200).json({data:users})
})