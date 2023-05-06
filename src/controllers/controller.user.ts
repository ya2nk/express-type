import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import { User } from '../models/user.model'
import config from "../config/config.app";

export const getAllUser = asyncHandler(async (req: Request, res: Response) => {
    const users = await User.find()
    res.status(200).json(req.user)
})

export const login = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({
        'token': jwt.sign({ id: 1 }, config.JWT_SECRET, { expiresIn: config.JWT_EXPIRES_IN })
    })
})