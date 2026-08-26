const User = require("../models/User");

const createUser = async (req , res)=>{
    try{
      
const user = await User.create(req.body)
res.status(201).json({
    message:"user created",
    user
})
    }
catch(err){
    console.log(err);
    
}
}
const getUsers = async (req , res )=>{
    try {
const users = await User.find()
res.status(200).json(users)
    }
    catch(err){
        console.log(err);
        
    }
}

const getsingleuser= async (req , res)=>{
    try {
const user = await User.findById(req.params.id)
res.status(200).json(user)
if (!user){
    return res.status(404).json({
        message:"User not found"
    })
    
}

    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
        
    }
}
const updateUser = async (req , res )=>{
    try{
const user = await User.findByIdAndUpdate(
    req.params.id ,
    req.body , {new:true}
)
res.status(200).json({
    message:"user updated",
    user
})
    }
    catch(err){
res.status(404).json(err)
    }
}
module.exports={
    createUser , getUsers , getsingleuser , updateUser
}