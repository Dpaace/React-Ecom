const Product = require('../Models/Product');
const multer = require("multer");
const fs = require('fs');
const express = require('express')
const app = express();
const cors = require('cors')
const path = require('path');
const bcrypt = require('bcrypt');
const Orders = require('../Models/Order');

app.use(cors())

//Validate upload file
const FILE_TYPE_MAP = {
  "image/jpeg": "jpeg",
  "image/png": "png",
  "image/jpg": "jpg",
};

// Upload image to server
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    const uploadPath = "./uploads/product_img";

    // Validate whether the file is a valid image
    if (!isValid) {
      cb(new Error("Invalid file type"));
    } else {
      cb(null, uploadPath); // Path where we upload the image
    }
  },
  filename: (req, file, cb) => {
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `IMG-${Date.now()}.${extension}`);
  },
});

const upload = multer({ storage });

// Create or add a product
const createProduct = (req, res, next) => {
  upload.array("photos", 5)(req, res, (err) => {
    if (err) {
      next(err);
    } else {
      const files = req.files;
      const newProduct = new Product({
        name: req.body.name,
        type: req.body.type,
        desc: req.body.desc,
        address: req.body.address,
        phone: req.body.phone,
        title: req.body.title,
        rating: req.body.rating,
        price: req.body.price,
        photos: files ? files.map((file) => `/uploads/product_img/${file.filename}`) : [],
      });

      newProduct
      newProduct
        .save()
        .then((savedProduct) => {
          res.status(201).json(savedProduct);
        })
        .catch((error) => {
          next(error);
        });
    }
  });
};


//get all Product data
const getProduct = async(req, res, next) => {
    const id = req.params.id;
    let cart;
    try {
      cart = await Orders.findById(id).populate("product");
    } catch (err) {
      console.log(err);
    }
    if (!cart) {
      return res.status(404).json({ msg: "No Cart Product Found" });
    }
    return res.status(200).json(cart);

}

const getAllProduct = async(req, res, next) => {
    try {
        const Products = await Product.find(

        );

        res.status(200).json({
            success:true,
            message:'List of Products',
            data : Products,
        })
    } catch (error) {
        next(error)
    }

}



const updateProduct = async(req, res, next) => {
  try {
      const updatedproduct = await Product.findByIdAndUpdate(
          req.params.id, { $set: req.body }, { new: true }
      );

      res.status(200).json(updatedproduct)
  } catch (error) {
      next(error)
  }
}


const deleteProduct = async(req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndDelete(
            req.params.id,
        );

        res.status(200).json("Product has been Deleted")
    } catch (error) {
        next(error)
    }
}

const getProductbyid = async(req, res, next) => {
  try {
      const users = await user.findById(
          req.params.id
      );

      res.status(200).json({
          success:true,
          message:'User',
          data : [users],
      })
  } catch (error) {
      next(error)
  }
}








module.exports = {createProduct, getProduct,deleteProduct,getAllProduct,getProductbyid,updateProduct}