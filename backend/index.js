const express = require('express')
const app=express()
const axios=require('axios')
const cors=require('cors')
const {getDb}=require('./database')
const {dbConnect}=require('./database')

app.use(cors())
app.use(express.json())

// Connect to the database
require('dotenv').config()
let db
dbConnect((err)=>{
    if(!err){
        app.listen(`${process.env.PORT}`,()=>{
            console.log(`Listening to port ${process.env.PORT}`)
        })
        db=getDb()
    }
})


// Routes

app.get('/',(req,res)=>{
res.status(200).json({message:"working good"})
})


app.post('/electronics',(req,res)=>{
    const elec=req.body
    db.collection('electronics')
    .insertOne(elec)
    .then(result=>{
        res.status(200).json(result)
    })
})


app.get('/electronics',(req,res)=>{
    let elecs=[]
    db.collection('electronics')
    .find()
    .forEach((elec)=>{
        elecs.push(elec)
    })
    .then(()=>{
       res.status(200).json(elecs)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})