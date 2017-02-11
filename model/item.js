const mongoose=require('mongoose');

var itemSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:{
        type:mongoose.schema.ObjectId,
        ref:"Category"
    }
});

module.exports=mongoose.model("Item",itemSchema);