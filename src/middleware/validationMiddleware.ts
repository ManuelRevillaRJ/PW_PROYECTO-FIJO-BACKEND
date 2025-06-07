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
      schema.parse(req[source])
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join(".")} is ${issue.message}`,
        }))
        res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid data", details: errorMessages })
      } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal Server Error" })
      }
    }
  }
}

export default validate