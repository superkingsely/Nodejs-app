const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const router = require('./Router/router')
const connectDB=require('./Entities/AppDbContext')

connectDB()



app.use(express.json())
app.use('/api',router)
app.use('*',(req,res)=>{
    
    res.status(404).send('Page Not fund')
})
app.listen(5000,()=>{
    console.log('server runing dear')
})