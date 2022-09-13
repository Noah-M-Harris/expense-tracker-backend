const express = require('express')
const router = express.Router()



const {
    registerUser,
    fetchUsers,
    loginUser,
    userProfile,
    updateUserProfile
} = require('../controllers/userController')


router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/fetch', fetchUsers)
router.get('/profile', userProfile)
router.patch('/update', updateUserProfile)




module.exports = router
