import express from "express";
import authRoutes from "./routes/auth-routes";

const app = express();

app.set("view engine", "ejs");

// set up routes
app.use("/auth", authRoutes);

app.get(`/`, (req, res) => {
  res.render("home");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
