const asyncHandler = require('express-async-handler')
const Income = require('../models/incomeModel')
const Expense = require('../models/expenseModel')

const accountStats = asyncHandler( async(req, res) => {
    try {
       // Expense Stats: Adding up all the expenses
    const expenseStats = await Expense.aggregate([
        // filter: filtered for records with an amount greater than or equal to 0
        {$match: {amount: {$gte: 0}}},
        {
            // group: finding the avg, sum, min, max of all the amounts
            $group: {
                _id: null,
                avgExpense: {$avg: "$amount"},
                totalExpenses: {$sum: "$amount"},
                minExpense: {$min: "$amount"},
                maxExpense: {$max: "$amount"},
                total: {$sum: 1},
            }
        }
    ])


    // Expense Stats: Adding up all the expenses
    const incomeStats = await Income.aggregate([
        // filter: filtered for records with an amount greater than or equal to 0
        {$match: {amount: {$gte: 0}}},
        {
            // group: finding the avg, sum, min, max of all the amounts
            $group: {
                _id: null,
                avgExpense: {$avg: "$amount"},
                totalExpenses: {$sum: "$amount"},
                minExpense: {$min: "$amount"},
                maxExpense: {$max: "$amount"},
                total: {$sum: 1},
            }
        }
    ])
    
    res.json({expenseStats, incomeStats})
    } catch (error) {
       res.json(error) 
    }
})

module.exports = {
    accountStats
}