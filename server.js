const express = require('express')
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const dns = require('dns')
dns.setServers(["8.8.8.8","1.1.1.1"])
const cors = require('cors')

const authRouter = require('./routes/authrouter')
const productRoute = require('./routes/productroute')
const orderRouter = require('./routes/orderroute')
app.use(express.json())
app.use(cors()) 
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log("not connected");   
})

//All routes here
app.use('/api/auth' , authRouter)
app.use('/api/product' , productRoute)
app.use('/api/orders' ,orderRouter )


// app.get("/" ,(req,res)=>{
//     res.status(200).json("running")
// })
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});