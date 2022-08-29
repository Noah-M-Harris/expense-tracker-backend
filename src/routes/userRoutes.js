const express = require('express')
const router = express.Router()



const {
    registerUser,
    fetchUsers
} = require('../controllers/userController')


router.post('/', registerUser)
router.get('/fetch', fetchUsers)




module.exports = router
