import express from 'express'
import Note from '../models/noteSchema.js'

const routerReminder = express.Router()


// Set or update reminder date for a note
routerReminder.post('/set-reminder/:id', async (req, res) => {
    const { reminderDate } = req.body
  
    if (!reminderDate || isNaN(Date.parse(reminderDate))) {
      return res.status(400).json({
        error: 'invalidDtoIn',
        message: 'Field "reminderDate" must be a valid date string'
      })
    }
  
    try {
      const updatedNote = await Note.findByIdAndUpdate(
        req.params.id,
        { reminderDate },
        { new: true }
      )
      res.status(200).json(updatedNote)
    } catch (err) {
      res.status(400).json({
        error: 'reminderSetFailed',
        message: 'Failed to set reminder date',
        details: err.message
      })
    }
  })
  export default routerReminder