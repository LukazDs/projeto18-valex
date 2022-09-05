import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import testeRouter from "./routes/testeRoute"
import errorHandler from "./middlewares/errorHandler"

dotenv.config();

const app = express();
app.use(express.json());

app.use(testeRouter)
app.use(errorHandler)

const PORT: number = Number(process.env.PORT) || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
