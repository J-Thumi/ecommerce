const {MongoClient}=require('mongodb')
require('dotenv').config()


let dbConnection

const dbConnect=(cb)=>{
    MongoClient.connect(`${process.env.MONGO_ATLAS}`)
    .then(client=>{
        dbConnection=client.db()
        return cb()
    })
    .catch(err=>{
  return cb(err)
    })
}

exports.getDb=()=>dbConnection
exports.dbConnect=dbConnect

