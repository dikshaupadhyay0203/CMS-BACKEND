import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import likes from "./routes/likes.routes.js";
import comment from "./routes/comment.routes.js";
import artifactRoutes from "./routes/artifact.routes.js";
import cookieParser from "cookie-parser";
const app = express();


//MIdllewares
app.use(cors());
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({limit: "10mb", extended: true}));
app.use(morgan("dev"));


app.use(cookieParser());
//Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "CMS BACKEND IS RUNNING"});
});

app.use("/auth", authRoutes);
app.use("/artifacts", artifactRoutes);
export default app;
