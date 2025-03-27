import 'dotenv/config';
import express from "express";
import mongoose from 'mongoose';
import methodOverride from "method-override";
import logger from "morgan";
import router from './controllers/auth.js';

const app = express();

// Set the port from environment variable or default to 3000
const PORT = process.env.PORT ? process.env.PORT : "3000";

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));
// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride("_method"));
// Morgan for logging HTTP requests
app.use(logger('dev'));
app.set("view engine", "ejs");


// server.js

// GET /
app.get("/", async (req, res) => {
    res.send("hello, friend!");
  });
app.use("/auth", router);
  
mongoose.connection.on("connected", () => {
    console.clear
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
app.listen(PORT, () => {
  console.log(`The express app is ready on port ${PORT}!`);
});
});