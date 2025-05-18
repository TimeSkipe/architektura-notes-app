import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import routerNote from "./routes/NoteRoutes.js"
import routerPassword from './routes/PasswordRoutes.js'
import routerReminder from "./routes/ReminderRoutes.js"
import routerCategory from './routes/CategoryRoutes.js'
import listEndpoints from 'express-list-endpoints'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}))
app.use(express.json())

// Routes
// app.get('/test', (req, res) => {
//   res.json({ message: 'CORS OK' })
// })

app.use('/api/notes', routerNote)
app.use('/api/notes/category', routerCategory)
app.use('/api/notes/password', routerPassword)
app.use('/api/notes/reminder', routerReminder) 

// console.log('Note routes:', listEndpoints(routerNote))
// console.log('Category routes:', listEndpoints(routerCategory))
// console.log('Password routes:', listEndpoints(routerPassword))
// console.log('Reminder routes:', listEndpoints(routerReminder))


// MongoDB Connection
console.log('⏳ Connecting to MongoDB...')
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))