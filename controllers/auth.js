const User  = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = async (req,res )=>{
    try{
const {name , email , password} = req.body
const existinguser = await User.findOne({email})
if (existinguser){
    return res.status(500).json({
        message:"user already register"
    })
}
const hashpass = await bcrypt.hash(password , 10)

const user =  await User.create({
    name ,
    email , 
    password:hashpass
})
res.status(200).json({
    message:"user created",
    user
})

    }
    catch(err){
        console.log(err);
        
    }
}



const login = async (req, res)=>{
    try{
const {email , password} =req.body
const user = await User.findOne({email})
if (!user){
    return res.status(400).json({
        message:"user not found"
    })
}
const isMatch = await bcrypt.compare(password , user.password)

if (!isMatch){
    return res.status(404).json({
        message:"email or password is incorrect"
    })
}

const token = jwt.sign(
    {userid : user._id},
process.env.JWT, 
    {expiresIn :"1d"}
)
res.status(500).json({
      message: "login succesful",
      token
    });


    }
    catch(err){
        console.log(err);
        
    }
}
module.exports = {register , login}