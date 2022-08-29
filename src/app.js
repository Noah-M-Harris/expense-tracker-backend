const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/connectDB')
const { 
    errorHandler,
    notFound 
} = require('./middleware/error')

connectDB()

const app = express()


// Middleware
app.use(express.json())
app.use(express.urlencoded( {extended: false}))


// Load Routers
const userRouter = require('./routes/userRoutes')

// Routers
app.use('/v1/users', userRouter)
//app.use('/v1/income', incomeRouter)
//app.use('/v1/expenses', expensesRouter)

app.get('/', (req, res) => {
    res.json({message: 'Hello new user'})
})

// Error Handlers
app.use(notFound)
app.use(errorHandler)

module.exports = app

