
import dotenv from "dotenv";
dotenv.config();


import express from "express";
import "./config/cloudinary.js"; 


import cors from "cors";

import connectDB from "./config/db.js";

import userRoutes from "./routes/authRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";
import ordersRoutes from "./routes/orderRoutes.js";
import paymentRoutes from './routes/paymentRoutes.js'
import analyticsRoutes from './routes/analyticsRoutes.js'
import contactRoutes from './routes/contactRoutes.js'

connectDB();

const app = express();
app.use(cors({
  origin: "http://localhost:3000", // frontend URL
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("backend is running");
});

app.use("/api/auth", userRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/orders" , ordersRoutes);

app.use('/api/payment' , paymentRoutes);
app.use('/api/analytics' , analyticsRoutes)
app.use('/api/contact' ,contactRoutes)

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`console.is running ${port}`);
});

