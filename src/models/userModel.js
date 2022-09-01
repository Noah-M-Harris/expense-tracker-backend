const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const userSchema = mongoose.Schema({
    firstName: {
        required: [true, 'First name is required'],
        type: String,
    },
    lastName: {
        required: [true, 'Last name is required'],
        type: String
    },
    email: {
        required: [true, 'Email is required'],
        type: String,
        unique: true
    },
    password: {
        required: [true, 'Password is required'],
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
},
{
    timestamps: true
})

// Hashing and salting password
userSchema.pre('save', async function (next){

    // Only run this function if password was moddified (not on other update functions)
    if(!this.isModified("password")) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

// Verify Password
userSchema.methods.isPasswordMatch = async function(userPassword) {
    return await bcrypt.compare(userPassword, this.password)
}


module.exports  = mongoose.model('User', userSchema)

