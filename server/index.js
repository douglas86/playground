import express from "express";
import authRoutes from "./routes/auth-routes";
import mongoose from "mongoose";
import keys from "./config/keys";

const passportSetup = require("./config/passport-setup");

const app = express();

app.set("view engine", "ejs");

// conect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log("Connect to mongodb");
});

// set up routes
app.use("/auth", authRoutes);

app.get(`/`, (req, res) => {
  res.render("home");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
