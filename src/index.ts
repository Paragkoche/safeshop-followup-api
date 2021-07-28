import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
import cors from "cors";
import api from "./routes/main";
env.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use("/api/v1", api);
const url: any = process.env.db;
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(5000, () => {
      console.log(`http://localhost:5000`);
    });
  });
