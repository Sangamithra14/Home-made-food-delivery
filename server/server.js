const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const orderRoutes = require("./routes/order");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/expressEat", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Express Eat backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
