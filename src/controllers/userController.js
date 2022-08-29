const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')



// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    // Destructuring what we are recieving: What user is sending
    const {email, firstName, lastName, password} = req?.body

    // Checking if user exists
    const userExists = await User.findOne({email})

    // Custom Error handler
    // Email already in use: Cannot register User
    if(userExists) throw new Error('User already exists')


    try {
        // Creating user in our MongoDB
        const user = await User.create({
            firstName,
            lastName,
            email,
            password
        })

        /* if(!user) {
            res.status(400) 
            throw new Error('Account could not be created. Please try again')
        } */

        // Everything is fine
        res.status(200).json(user)

    } catch (error) {
        res.json(error)
    }
})

// @desc    Fetch All users
// @route   GET /api/users/fetch
// @access  Private
const fetchUsers = asyncHandler (async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        res.json(error)
    }
})

module.exports = {
    registerUser,
    fetchUsers
}