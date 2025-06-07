import dotenv from "dotenv"

dotenv.config()

// server
export const PORT = process.env.PORT || 3000

// TODO: database

// api - mail sender
export const API_KEY = process.env.SMTP_API_KEY as string
export const SENDER = process.env.SENDER as string
