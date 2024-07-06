const express= require('express')
const app=express()
const router=require('./Router/router')
const morgan = require('morgan')

// logger
app.use(morgan('dev'))
// request parsing middleware
app.use(express.text())
app.use(express.json())
// app router
app.use('/api',router)
app.use('*',(req,res)=>{
    res.status(404).send({
        message:'Page not found'
    })
})



module.exports=app;