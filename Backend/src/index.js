import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js"; 

dotenv.config({
  path: "./.env",   // make sure file name is correct
});

// const app = express();  // ✅ define app before using it

app.use(express.json());


// connect to DB
connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`✅ Server is running at PORT: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDb connection failed:", err);
  });
