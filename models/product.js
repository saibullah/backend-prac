const mongoose = require("mongoose")

const productShema = new mongoose.Schema({
    name :{
        type : String,
        required :true

    },
    description:{
        type:String,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    actualprice :{
        type:Number,
        required : true
    }, 
    discountprice:{
          type:Number,
        required : true
    },
    discountpercentage:{
         type:Number,
        required : true
    },
    quantity:{
        type:Number,
        required :true
    }

})
module.exports=mongoose.model("Product" , productShema)