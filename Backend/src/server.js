import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import UserRoutes from "./Routes/UserRoutes/UserRoutes.js";
import adminRouter from "./Routes/AdminRoutes/AdminRoutes.js";
import { connectDB } from './config/db.js';


dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(cors())
app.use('/api/users', UserRoutes);
app.use('/api/admin', adminRouter);


app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () => console.log(`Server started on port ${port}`));

