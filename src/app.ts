import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import gamesRouter from "./routes/games"
import sessionsRouter from "./routes/sessions"
import usersRouter from "./routes/users"
import debug from "./middleware/debug"

// Para correr la app:
// $ npm run build:run

// .env config
dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend
  })
)

// Middleware (corre antes de cada endpoint)
// Para debug y ver en consola los endpoint hits
app.use(debug())

// Home Endpoint
app.get("/", function (_, res) {
  res.json("Home Endpoint")
})
// Sessions Endpoint
app.use("/sessions", sessionsRouter)
// Games Endpoint
app.use("/games", gamesRouter)
// Users Endpoint
app.use("/users", usersRouter)

app.listen(PORT, function () {
  console.log(`Server listening on http://localhost:${PORT}`)
})
