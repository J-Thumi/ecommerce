const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema(
  {
    name:String,
    location:String,
    id:String,
    email:String,
    phoneNo:Number,
  }
)

const UserModel=mongoose.model('User',UserSchema)

module.exports=UserModel