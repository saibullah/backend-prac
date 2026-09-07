const express = require("express")
const Product = require("../models/product")

const createProduct = async (req, res) => {
    try {
        const { name, description, image, actualprice, discountprice, discountpercentage, quantity } = req.body
        const product = await Product.create(req.body)
        res.status(201).json({
             message: "Product created",
              product })

    }
    catch (error) {
        res.status(500).json({ message: "failed to create product", error })
    }
}

const getallProduct = async (req, res) => {
    try {
        const product = await Product.find()
        res.status(200).json({ message: "fetched", product })
    }
    catch (error) {
        res.status(500).json({ message: "product fetch failed", error })
    }
}

const getsingleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            res.status(500).json({ message: "product not found" })

        }
        res.status(200).json({ message: "product found ", product })
    }
    catch (error) {
        res.status(500).json({
            message: "failed to get product ", error
        }) 
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!product) {
            res.status(500).json({
                message: "product not found"
            })
        }
        res.status(201).json({
            message: "product updated succesfully", product
        })
    }
    catch (error) {
        res.status(500).json({
            message: "failed to update ", error
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            res.status(500).json({
                message: "product not found"
            })
        }
        res.status(200).json({
            message: "product deleted succesfully"
        })
    }
    catch (error) {
        res.status(500).json({ message: "failed to delete", error })
    }
}

module.exports = { createProduct, getallProduct, getsingleProduct, updateProduct, deleteProduct }