require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const cors = require("cors");
const app = express();
app.use(cors({
  origin: "https://your-portfolio.vercel.app"}));
app.use(express.json());
app.use("/api/contact", contactRoutes);
const PORT = process.env.PORT;

connectDB();
app.get("/", (req, res) => {
    res.send("Portfolio Backend is Running 🚀");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});