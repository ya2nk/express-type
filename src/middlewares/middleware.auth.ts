import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import config from "../config/config.app";
import logger from "../utils/util.logger";

export const tokenVerify = (
	request: Request,
	response: Response,
	next: NextFunction) => {
	const authHeader = request.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]
	if (token == null) {

		return response.status(401).json({ 'message': 'invalid token', 'error': true })
	}

	jwt.verify(token, config.JWT_SECRET, (err: any, user: any) => {
		logger.error(err)

		if (err) return response.status(403).json({ 'message': 'token expired', 'error': true })
		request.user = user
		next()
	})
}
