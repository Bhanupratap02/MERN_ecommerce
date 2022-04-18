/** @format */
import express from "express"
import dotenv from "dotenv"
import path from "path"
import morgan from "morgan";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js"
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"
dotenv.config();


const app = express(); 

//load middlewares
app.use(express.json())
if(process.env.NODE_ENV === "development"){
   app.use(morgan("dev"))
}


//load routes
app.use("/api/products",productRoutes);
app.use("/api/users",userRoutes);
app.use("/api/orders",orderRoutes);
app.use('/api/uploads',uploadRoutes)
app.get( "/api/config/paypal", (req, res) =>
{
  console.log("i get it ")
  res.send(process.env.PAYPAL_CLIENT_ID
)})


// error middlewares
const __dirname = path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))
app.use(notFound);
app.use(errorHandler);




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
