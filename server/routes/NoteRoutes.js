import express from 'express'
import Note from '../models/noteSchema.js'

const routerNote = express.Router()

// Create note with validation
routerNote.post('/', async (req, res) => {
  const { title, content, category, reminderDate, password } = req.body

  if (!title || typeof title !== 'string') {
    return res.status(400).json({
      error: 'invalidDtoIn',
      message: 'Field "title" is required and must be a string'
    })
  }

  try {
    const newNote = new Note({ title, content, category, reminderDate, password })
    const savedNote = await newNote.save()
    res.status(201).json(savedNote)
  } catch (err) {
    res.status(400).json({
      error: 'createFailed',
      message: 'Failed to create note',
      details: err.message
    })
  }
})

// Get all notes
routerNote.get('/', async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 })
    res.status(200).json(notes)
  } catch (err) {
    res.status(500).json({
      error: 'loadFailed',
      message: 'Failed to load notes'
    })
  }
})

// Delete note
routerNote.delete('/:id', async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Note deleted' })
  } catch (err) {
    res.status(500).json({
      error: 'deleteFailed',
      message: 'Failed to delete note'
    })
  }
})

// Update note
routerNote.put('/:id', async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedNote)
  } catch (err) {
    res.status(400).json({
      error: 'updateFailed',
      message: 'Failed to update note',
      details: err.message
    })
  }
})

export default routerNote