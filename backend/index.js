import express from "express";
import Routes from "./routes.js";
import Dotenv from "dotenv";
import cors from "cors";
import bodyparser from "body-parser";
import connection from "./db.js";
import "./mailSender/mail.js";
Dotenv.config();

const app = express();
connection();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyparser.json({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/", Routes);

app.listen(8000, () => {
  console.log("Running on port 8000");
});
