import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import UserRoutes from "./Routes/UserRoutes/UserRoutes.js";
import adminRouter from "./Routes/AdminRoutes/AdminRoutes.js";
import { connectDB } from './config/db.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 3000;

// Define __dirname for ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: ['http://localhost:4000', 'https://certipro.arcite.in', 'https://www.certipro.arcite.in', 'http://localhost:3000'],
    methods: "GET, PUT, POST, PATCH, DELETE",
    allowedHeaders: ["Content-Type", "Authorization"]
  };
  app.use(cors(corsOptions));


app.use('/api/users', UserRoutes);
app.use('/api/admin', adminRouter);

// Serving static files
app.use(express.static(join(__dirname, '../../Frontend/dist')));


app.get('*', (req, res) => {
  res.sendFile(join(__dirname, "../../Frontend/dist/index.html"));
});

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () => console.log(`Server started on port ${port}`));

