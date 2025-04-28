import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import healthCheckRoute from "./routes/healthCheck.route.js";
import authRoutes from "./routes/auth.routes.js";
import upcomingIPORoutes from './routes/upcomingIPO.route.js'
import ongoingIPORoutes from "./routes/ongoingIPO.route.js"
import newlistedIPORoutes from './routes/newlistedIPO.route.js'
import allSectorRoutes from "./routes/allSector.route.js"
import blogRoutes from './routes/blog.route.js'
import sharkInvestorRoute from './routes/sharkInvestor.route.js'
import sectorRoutes from './routes/sector.route.js'

dotenv.config({
  path: "./.env",
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.BASE_URL,
  })
);

// All routes
app.use("/healthCheck", healthCheckRoute);
app.use("/api/v1/users", authRoutes);
app.use("/api/v1/users", upcomingIPORoutes)
app.use("/api/v1/users", ongoingIPORoutes)
app.use("/api/v1/users", newlistedIPORoutes)
app.use("/api/v1/users", allSectorRoutes)
app.use("/api/v1/users", blogRoutes)
app.use("/api/v1/users", sharkInvestorRoute)
app.use("/api/v1/users", sectorRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
