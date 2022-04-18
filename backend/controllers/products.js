/** @format */

import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

//@desc    fetch all products
//@route   get   /api/products
//@access  public

export const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  const keyword = req.query.keyword ? {
    name:{
      $regex:req.query.keyword,
      $options: "i"
    }
  } : {}
  const count = await Product.countDocuments({...keyword})
  const products = await Product.find({...keyword}).limit(pageSize).skip(pageSize * (page - 1))
  res.json({products,page,pages:Math.ceil(count / pageSize)});
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
    category:"Sample category"
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

//@desc       update a product
//@route     put   /api/products/:id
//@access   private/admin
export const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;
  const product = await Product.findById(req.params.id)
  if(product){
    product.name = name ;
    product.price = price ;
    product.description = description ;
    product.image = image ;
    product.brand = brand ;
    product.category = category;
    product.countInStock = countInStock;
   

const updatedProduct = await product.save();
res.status(201).json(updatedProduct);
  }else{
    res.status(401)
    throw new Error("Product not found")
  }
  
});


//@desc       create a new review
//@route        post   /api/products/:id/reviews
//@access   private
export const createProductReview = asyncHandler(async (req, res) => {
  const { rating , comment } =
    req.body;
  const product = await Product.findById(req.params.id)
  if(product){
   const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString())
   if(alreadyReviewed){
  res.status(400)
  throw new Error("Product already reviewed")
   }

   const review = {
     name:req.user.name,
     rating:Number(rating),
     comment,
     user:req.user._id
   }
   product.reviews.push(review)
   
   product.numReviews = product.reviews.length

   product.rating = product.reviews.reduce((acc,item) => item.rating + acc ,0) / product.reviews.length
     await product.save()

     res.status(201).json({message:"Review added"})
  }else{
    res.status(401)
    throw new Error("Product not found")
  }
  
});


//@desc       Get top rated products
//@route       get   /api/products/top
//@access       public
export const getTopProducts = asyncHandler(async (req, res) => {
 
 const products = await Product.find({}).sort({rating:-1}).limit(3)

 res.json(products)
  
});