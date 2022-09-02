const express = require('express')
const router = express.Router()



const {
    createExpense,
    fetchAllExpense,
    fetchExpense,
    updateExpense,
    deleteExpense
} = require('../controllers/expenseController')


router.post('/', createExpense)
router.get('/', fetchAllExpense)
router.get('/:id', fetchExpense)
router.put('/:id', updateExpense)
router.delete('/:id', deleteExpense)




module.exports = router