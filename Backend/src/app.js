import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/User.routes.js";
import budgetRoutes from "./routes/Budget.routes.js";

const app = express();

const allowedOrigins = process.env.CORS_ORIGIN.split(",");

app.use(cors({
    origin: (origin, callback) => {
        // allow requests with no origin (like Postman)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true, // allow cookies
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1", budgetRoutes);


export { app };
