/** @format */

import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

//@desc    fetch all products
//@route   get   /api/products
//@access  public

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc    fetch  a single  product
//@route   get   /api/products/:id
//@access  public
export const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//@desc     delete a product
//@route    Delete  /api/products/:id
//@access   private/admin
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    return res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//@desc      create  a product
//@route     post   /api/products
//@access   private/admin
export const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample brand",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });
  const createdProduct = await product.save();
  res.status(201).json(product);
});

//@desc       update a product
//@route     put   /api/products/:id
//@access   private/admin
export const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;
  const product = await Product.findById(req.params.id)
  if(product){

   

const createdProduct = await product.save();
res.status(201).json(product);
  }else{
    res.status(401)
    throw new Error("Product not found")
  }
  
});
