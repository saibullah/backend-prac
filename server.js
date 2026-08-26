const express = require("express")
const mongoos = require("mongoose")
const app = express()
const userRouter = require('./routes/route')
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
app.use(express.json());
require("dotenv").config()
const auth = require("./routes/authroute")

mongoos.connect(process.env.MONGO_DB_URL)
.then (()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err);
    
})
app.use("/api/user" , userRouter)
app.use("/api/auth", auth )

app.get("/",(req,res)=>{
    res.send("rest api running")
})




app.listen(4000,(req,res)=>{
    console.log("running");
    
})
