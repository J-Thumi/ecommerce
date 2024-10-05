const mongoose=require('mongoose')

const electronicsSchema=new mongoose.Schema(
  {
    name:String,
    price:String,
    image:String,
    shortDescription:String,
    longDescription:String
  }
)

const electronicsModel=mongoose.model('Good',electronicsSchema)

module.exports=electronicsModel