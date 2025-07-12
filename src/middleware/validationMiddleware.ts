import { NextFunction, Request, Response } from "express";
import { ZodError, ZodTypeAny } from "zod"
import { StatusCodes } from "http-status-codes"

interface validateProps {
  schema: ZodTypeAny
  source: "body" | "query" | "params" | "headers"
}

function validate({ schema, source }: validateProps) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      var parsed = schema.safeParse(req[source])

      if (parsed.success) {
        req[source] = parsed.data
        console.log(parsed.data)
        return next()
      } else {
        console.log("Invalid data")
        res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid data" })
      }
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid data", error })
        return
      } else {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ error: "Internal Server Error: Type Validation Middleware" })
        return
      }
    }
  }
}

export default validate