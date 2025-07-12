import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config"
import { StatusCodes } from "http-status-codes"

function tokenValidation() {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Authorization header missing or malformed" })
      return
    }

    const token = authHeader.split(" ")[1]

    try {
      const _ = jwt.verify(token, JWT_SECRET)
      next()
    } catch (err) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid or expired token" })
      return
    }
  }
}

export default tokenValidation
