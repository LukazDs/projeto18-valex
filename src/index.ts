import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT: number = Number(process.env.PORT) || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
