import express from "express"
import cors from "cors"
import gamesRouter from "./routes/games"
import sessionsRouter from "./routes/sessions"
import usersRouter from "./routes/users"
import debug from "./middleware/debug"
import { PORT } from "./config"

// Para correr la app:
// $ npm run dev
// $ npm run start para build

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"], // Frontend
  })
)

// Middleware (corre antes de cada endpoint)
// Para debug y ver en consola los endpoint hits
app.use(debug())

// Home Endpoint
app.get("/", (_, res) => {
  res.json("Home Endpoint")
})
// Sessions Endpoint
app.use("/sessions", sessionsRouter)
// Games Endpoint
app.use("/games", gamesRouter)
// Users Endpoint
app.use("/users", usersRouter)


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
