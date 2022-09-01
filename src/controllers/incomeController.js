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


// @desc    Get all income
// @route   GET /api/income
// @access  Private
const fetchAllIncome = asyncHandler (async (req, res) => {
    try {
        // Recieve back all instances of income
        const income = await Income.find()
        res.json(income)
    } catch (error) {
        res.json(error)
    }
})


// @desc    Get single income
// @route   GET /api/income
// @access  Private
const fetchIncome = asyncHandler (async (req, res) => {
    // recieving id from the params
    const {id} = req?.params
    try {
        // Recieve an instance of income by id
        const income = await Income.findById(id)
        res.json(income)
    } catch (error) {
        res.json(error)
    }
})

module.exports = {
    createIncome,
    fetchAllIncome,
    fetchIncome

}
