import dotenv from "dotenv"
import SMTP2GOApi from "smtp2go-nodejs"

dotenv.config()

// server
export const PORT = process.env.PORT || 3000

// TODO: database

// api - mail sender
export const API_KEY = process.env.SMTP_API_KEY as string
export const api = SMTP2GOApi(API_KEY)
export const SENDER = process.env.SENDER as string

// jwt secret
export const JWT_SECRET = process.env.JWT_SECRET as string
export const tokenOptions = { expiresIn: "1d" }

// database url
export const DATABASE_URL = process.env.DATABASE_URL as string