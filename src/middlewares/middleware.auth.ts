import { NextFunction,Request,Response } from "express";

export const tokenVerify = (
    request: Request, 
    response: Response, 
    next: NextFunction) => {
      console.log("middleware call");
      next()
  }