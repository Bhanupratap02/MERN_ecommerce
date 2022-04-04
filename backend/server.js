/** @format */
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js"
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
dotenv.config();


const app = express(); 

//load middlewares



//load routes
app.use("/api/products",productRoutes);


// error middlewares
app.use(notFound)
 app.use(errorHandler)




const port = 4000;
// connect to database
mongoose.connect("mongodb://localhost:27017/shopper", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("database connectd");
}).catch((err)=>console.log("Error in connecting database",err.message));
//connect to server
app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
