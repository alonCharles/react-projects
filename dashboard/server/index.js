import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from './routes/kpi.js'
import KPI from './models/KPI.js';
import { kpis } from './data/data.js'

// Configurations
dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }));
app.use(cors());

// Routes
app.use(kpiRoutes)

// Mongoose Setup

const PORT = process.env.PORT || 9000


async function connectDB () {
        await mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            app.listen(PORT, () => console.log(`connected to port: ${PORT}`))
        //     Enter Data as needed
        //      mongoose.connection.db.dropDatabase();
        //      KPI.insertMany(kpis)
        }).catch((error) => console.log(error))
}


connectDB();