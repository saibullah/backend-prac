const User = require('../models/user')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const Register = async (req, res) => {

    try {
        const { name, email, password } = req.body
        const existing = await User.findOne({ email })
        if (existing) {
            return res.status(500).json({
                message: "user already exist"
            })
        } 
        const hashpass = await bcrypt.hash(password, 10)
        const user = await User.create({
            name, email, password: hashpass
        })

        res.status(201).json({
            message: "Registed succesfully",
            user
        })

    }
    catch (err) {
        res.status(500).json({
            message: "Failed to create"
        })
    }
}


const Login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(500).json({ message: "user not found register" })
        }

        const compare = await bcrypt.compare(password, user.password)
        if (!compare) {
            return res.status(500).json({ message: "email or password is incorrrect pls check" })
        }
        const token = jwt.sign(
            { 
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }

        )
        res.status(200).json({
            message: "Login succes",
            token,
            role:user.role
        })

    }
    catch (err) {
        res.status(500).json(err.message)
    }
}
module.exports= {Login,Register}