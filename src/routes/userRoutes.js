const express = require('express')
const router = express.Router()



const {
    registerUser,
    fetchUsers,
    loginUser
} = require('../controllers/userController')


router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/fetch', fetchUsers)




module.exports = router
