import { NextFunction, Request } from 'express';

function debug(){
  return (req: Request, _, next: NextFunction) => {
    console.log(`${req.method} ${req.originalUrl}`)
    next()
  }
}

export default debug
