
// import dotenv from "dotenv";
// dotenv.config();


// import express from "express";
// import "./config/cloudinary.js"; 
// import path from "path";


// import cors from "cors";

// import connectDB from "./config/db.js";

// import userRoutes from "./routes/authRoutes.js";
// import productsRoutes from "./routes/productsRoutes.js";
// import ordersRoutes from "./routes/orderRoutes.js";
// import paymentRoutes from './routes/paymentRoutes.js'
// import analyticsRoutes from './routes/analyticsRoutes.js'
// import contactRoutes from './routes/contactRoutes.js'

// connectDB();

// const app = express();
// app.use(cors({
//   origin:[ "http://localhost:3000", 'http://127.0.0.1:3000', process.env.FRONTEND_URL ], // frontend URL
//   credentials: true
// }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("backend is running");
// });

// app.use("/api/auth", userRoutes);
// app.use("/api/products", productsRoutes);
// app.use("/api/orders" , ordersRoutes);

// app.use('/api/payment' , paymentRoutes);
// app.use('/api/analytics' , analyticsRoutes)
// app.use('/api/contact' ,contactRoutes)







// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static(path.join(__dirname, '../frontend/build')));
  
//   app.use((req, res) => {
//     res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
//   });
// } else {
//   app.get('/', (req, res) => {
//     res.send('E-Com API is running in Development mode...');
//   });
// }




// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`console.is running ${port}`);
// });

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import "./config/cloudinary.js";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

import connectDB from "./config/db.js";
import userRoutes from "./routes/authRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";
import ordersRoutes from "./routes/orderRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

connectDB();

const app = express();

// ✅ FIX __dirname (ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ FIX CORS
app.use(cors({
  origin: [
"http://localhost:5173",
"http://127.0.0.1:5173",
process.env.FRONTEND_URL
],
  credentials: true
}));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// routes
app.use("/api/auth", userRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/contact", contactRoutes);

// ✅ PRODUCTION FRONTEND SERVE (Vite)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});