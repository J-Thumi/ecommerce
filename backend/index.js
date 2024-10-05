const express = require('express')
const app=express()
const axios=require('axios')
const cors=require('cors')
const EmployeeModel=require('./model/elecDb')
const bcrypt=require('bcrypt')
const mongoose=require('mongoose')
const Good=require('./model/elecDb')

app.use(cors())
app.use(express.json())

require('dotenv').config()

mongoose.connect(process.env.MONGO_ATLAS)
const connection = mongoose.connection
connection.on('error',(err)=>console.log(err))
connection.once('open',()=>console.log("Connected to Mongoose"))


app.listen(`${process.env.PORT}`,()=>{
    console.log(`Listening to port ${process.env.PORT}`)
})


// Routes

app.get('/',(req,res)=>{
res.status(200).json({message:"working good"})
})




app.get('/electronics',(req,res)=>{
    let elecs=[]
    
    Good.find()
            ///while using mongoose no need to use forEach
    // .forEach((elec)=>{
    //     elecs.push(elec)
    // })
    .then((elecs)=>{
       res.status(200).json(elecs)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

app.post('/sign',async(req,res)=>{
    try{
        if(req.body.password==req.body.confirmPassword){
            const employee=new EmployeeModel()
            employee.email=req.body.email
            employee.name=req.body.name
                const encrypt= await bcrypt.hash(req.body.password,10)
                employee.password=encrypt
            const result= await employee.save()
             res.json('user added successfully')
        }
        else{
            res.json("password confirm do not match")
        }
   
    }
    catch(err){
        res.json(err)
    }
})


app.post('/login',(req,res)=>{
    const {name,password}=req.body
    EmployeeModel.findOne({name: name})
    .then( async (user)=>
    {
        try{
        if(user){
                    const encrypt= await bcrypt.compare(password,user.password)
            if(encrypt){
                res.json("success")
            }
            else{
                res.json("incorrect password")
            }  
        }
        else{
            res.json("no such user")
        }
    }
    catch(err){
        res.json(err)
    }}
    )
    .catch(err=>res.json(err))
})

