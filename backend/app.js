import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import connectDB from "./connection/connection.js";
import errorHandler from "./middleware/errorHandler.js";

import auth from "./route/auth.js";
import list from "./route/list.js";

const app = express();

connectDB();

app.use(cors(
  {
    origin:[
      "http://localhost:5173",
      "https://tutedude-task-8.netlify.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE","OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization","id"],
    credentials: true,
  }
));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1", auth);
app.use("/api/v2", list);

// Error Handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
