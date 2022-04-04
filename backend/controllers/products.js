/** @format */

import Product from "../models/productModel.js"
import asyncHandler from "express-async-handler";


//@desc    fetch all products
//@route   get   /api/products
//@access  public

export const getProducts = asyncHandler ( async  (req,res) => {
const products = await Product.find({})
 res.json(products);
})

//@desc    fetch  a single  product
//@route   get   /api/products/:id
//@access  public
export const getProduct = asyncHandler( async (req, res) => {
  const product = await Product.findById(req.params.id)
  if(product){
   return  res.json(product);
  }
  else{
   res.status(404)
  throw new Error("Product not found");
   
  }
});

