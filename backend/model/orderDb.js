const mongoose=require('mongoose')

const OrderSchema=new mongoose.Schema(
  {
    itemName:String,
    Number:Number,
    UserName:String,
    Location:String,
    phoneNo:Number,
  }
)

const OrderModel=mongoose.model('Order',OrderSchema)

module.exports=OrderModel