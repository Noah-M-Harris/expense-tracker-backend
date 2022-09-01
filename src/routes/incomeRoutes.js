const express = require('express')
const router = express.Router()



const {
    createIncome
} = require('../controllers/incomeController')


router.post('/', createIncome)





module.exports = router