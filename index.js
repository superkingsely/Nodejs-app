const express=require('express')
const app=express()
const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://superkingsely:superjesus1.m@superkingsely-cluster.qz77eax.mongodb.net/e-commerceDB?retryWrites=true&w=majority&appName=Superkingsely-cluster').then((connect)=>{
    console.log('db sucess',connect.connection.name)
}).catch((err)=>{
    console.log(err.message)
})

app.use(express.json())

app.use('*',(req,res)=>{
    
    res.status(404).send('Page Not fund')
})
app.listen(5000,()=>{
    console.log('server runing dear')
})