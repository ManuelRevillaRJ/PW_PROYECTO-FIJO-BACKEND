import express from "express";
import cors from "cors";
import gamesRouter from "./routes/games";
import sessionsRouter from "./routes/sessions";
import usersRouter from "./routes/users";
import debug from "./middleware/debug";
import { PORT } from "./config";
import cartRouter from "./routes/cart";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use(
//   cors({
//     origin: ["http://localhost:5173", "https://manuelrevillarj.github.io/PW_G2_F/"],
//   })
// )

app.use(cors())

// Middleware debug
app.use(debug());

// Rutas
app.get("/", (_, res) => {
  res.json("Home Endpoint");
});
app.use("/sessions", sessionsRouter);
app.use("/games", gamesRouter);
app.use("/users", usersRouter);
app.use("/cart", cartRouter);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
