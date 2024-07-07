const mongoose=require('mongoose');
const connectDb=async()=>{
    // 'mongodb+srv://superkingsely:superjesus1.m@superkingsely-cluster.qz77eax.mongodb.net/contactsDb?retryWrites=true&w=majority&appName=Superkingsely-cluster'
    try{
        const connect=await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Contected",connect.connection.host,'/n',connect.connection.name)
    }catch(err){
        console.log('Error oh',err.message);
        process.exit(1);
    }
}
module.exports=connectDb