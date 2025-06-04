import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

interface validateProps {
  schema: ZodTypeAny,
  source: "body" | "query" | "params" | "headers"
}

export function validate({schema, source}: validateProps) {
  return (req: Request, res: Response, next: NextFunction) => {
      const result = schema.safeParse(req[source])
      console.log(result)

      if (!result.success) {
        res.status(400).json({error: result.error.flatten()})
      }

      // (req as any)[source] = result.data
      Object.assign(req[source], result.data)
      next()
  }
}