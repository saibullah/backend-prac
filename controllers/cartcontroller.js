const Order = require("../models/cart")

const addtocart = async  (req , res) =>{

    try{
        const userid = req.user.id
        const {productId} = req.body

const existing = await Order.findOne({
    user: userid ,
    product : productId
})
if(existing){
    existing.quantity +=1
    await existing.save()
    return res.status(200).json({
        message : "Order placed",
        cart :existing
    })
}

const order = new Order({
    user : userid , 
    product : productId,
    quantity :1
})
await order.save()
res.status(201).json({
    message : "order placed",
    order
})

    }
    catch(err){
        res.status(500).json({
            message:"failed to get"
        })
    }

}


const getmyorder = async (req,res)=>{
    try{
    const userid = req.user.id
    const orders = await Order.find({user :userid})
    .populate("product")
    res.status(200).json({
        message:"order fetched", orders
    })
    }
    catch(err){
        res.status(500).json(err)
    }
}


const adminallorder = async (req,res)=>{
    try{
const order = await Order.find()
.populate("user")
.populate("product")

res.status(200).json({
    message:"all orders get" , order
})
    }catch(err){
        res.status(500).json(err)
    }
}
module.exports = {addtocart , getmyorder  , adminallorder}