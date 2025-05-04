import express from 'express'
import Note from '../models/noteSchema.js'

const routerPassword = express.Router()


// Set or update password for a note
routerPassword.post('/set-password/:id', async (req, res) => {
    const { password } = req.body
  
    if (!password || typeof password !== 'string') {
      return res.status(400).json({
        error: 'invalidDtoIn',
        message: 'Field "password" is required and must be a string'
      })
    }
  
    try {
      const updatedNote = await Note.findByIdAndUpdate(
        req.params.id,
        { password, isProtected: true },
        { new: true }
      )
      res.status(200).json(updatedNote)
    } catch (err) {
      res.status(400).json({
        error: 'passwordSetFailed',
        message: 'Failed to set password',
        details: err.message
      })
    }
  })
  
  

  export default routerPassword