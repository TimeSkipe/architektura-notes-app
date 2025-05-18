import express from 'express'
import Category from '../models/categorySchema.js'

const routerCategory = express.Router()

// Create category
routerCategory.post('/', async (req, res) => {
  const { name, color } = req.body
  
  if (!name || typeof name !== 'string') {
    return res.status(400).json({
      error: 'invalidDtoIn',
      message: 'Field "name" is required and must be a string'
    })
  }

  try {
    const newCategory = new Category({ name, color })
    const savedCategory = await newCategory.save()
    res.status(201).json(savedCategory)
  } catch (error) {
    res.status(400).json({
      error: 'createFailed',
      message: 'Failed to create category',
      details: error.message
    })
  }
})

// Get all categories
routerCategory.get('/', async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 })
    res.status(200).json(categories)
  } catch (error) {
    console.error("Category loading error:", error);
    res.status(500).json({
      error: 'loadFailed',
      message: 'Failed to load categories',
      details: error.message
    });
  }
})

export default routerCategory