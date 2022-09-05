import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cardRouter from "./routes/cardRouter"
import rechargeRouter from "./routes/rechargeRouter"
import errorHandler from "./middlewares/errorHandler"

dotenv.config();

const app = express();
app.use(express.json());

app.use(cardRouter)
app.use(rechargeRouter)
app.use(errorHandler)

const PORT: number = Number(process.env.PORT) || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
