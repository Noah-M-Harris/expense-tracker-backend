const express = require('express')
const router = express.Router()



const {
    createIncome,
    fetchAllIncome,
    fetchIncome,
    updateIncome,
    deleteIncome
} = require('../controllers/incomeController')


router.post('/', createIncome)
router.get('/', fetchAllIncome)
router.get('/:id', fetchIncome)
router.put('/:id', updateIncome)
router.delete('/:id', deleteIncome)




module.exports = router