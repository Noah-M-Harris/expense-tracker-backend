const Income = require('../models/incomeModel')
const asyncHandler = require('express-async-handler')


// @desc    Create an Income
// @route   POST /api/income
// @access  Private
const createIncome = asyncHandler (async (req, res) => {
    // what we are receieving from frontend
    const {title, amount, description, user} = req.body
    try {
        // create an instance of income
        const income = await Income.create({
            title,
            amount,
            description,
            user
        })   
        
        // Send back that income instance
        res.json(income)
    } catch (error) {
        res.json(error)
    }
})

module.exports = {
    createIncome,
}
