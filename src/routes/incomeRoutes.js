const express = require('express')
const router = express.Router()



const {
    createIncome,
    fetchAllIncome,
    fetchIncome
} = require('../controllers/incomeController')


router.post('/', createIncome)
router.get('/', fetchAllIncome)
router.get('/:id', fetchIncome)




module.exports = router