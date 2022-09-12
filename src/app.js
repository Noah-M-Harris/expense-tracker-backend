const express = require('express')
const cors = require('cors')
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
app.use(cors())


// Load Routers
const userRouter = require('./routes/userRoutes')
const incomeRouter = require('./routes/incomeRoutes')
const expenseRouter = require('./routes/expenseRoutes')
const accountRouter = require('./routes/accountStatRoutes')


app.get('/', (req, res) => {
    res.json({message: 'Expense Tracker'})
})

// Routers
app.use('/v1/users', userRouter)
app.use('/v1/income', incomeRouter)
app.use('/v1/expenses', expenseRouter)
app.use('/v1/account', accountRouter)


// Error Handlers
app.use(notFound)
app.use(errorHandler)

module.exports = app

