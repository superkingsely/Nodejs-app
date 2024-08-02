const mongoose=require('mongoose')

// mongoose.connect('mongodb+srv://superkingsely:superjesus1.m@superkingsely-cluster.qz77eax.mongodb.net/e-commerceDB?retryWrites=true&w=majority&appName=Superkingsely-cluster').then((connect)=>{
//     console.log('db sucess',connect.connection.name)
// }).catch((err)=>{
//     console.log(err.message)
// })
const connectDB=async()=>{
    try{
        const connect=await mongoose.connect(process.env.CONNECTION_STRINGS)
        console.log(`Database ${connect.connection.name} connected`)
    }catch(err){
        console.log('error here',err.message)
        // process.exit(0)
    }
}
module.exports=connectDB