const User = require("../Models/User");
const jwt=require('jsonwebtoken')

const registerUser=async(req,res)=>{
    try{
        const newUser=req.body;
        if(!newUser.username||!newUser.email||!newUser.password){
            res.status(400);
            throw new Error('All field are compulsory')
        }
        const Isavaliable=await User.findOne({email:newUser.email});
        if(Isavaliable){
            res.status(400);
            throw new Error('user already exist')
        }
        const addUser=await User.create({
            username:newUser.username,
            email:newUser.email,
            password:newUser.password,
        })
        res.status(200).send(addUser)
        // res.status(200).send({
        //     messsage:'post user'
        // })
    }catch(err){
        console.log('err from reg user',err.message)
    }
}
// Login
const loginUser=async(req,res)=>{
    try{
        // validate
        const userData=req.body;
        if(!userData.username||!userData.email||!userData.password){
            res.status(400);
            throw new Error('All field are compulsory')
        }
        // find user in the data
        const Isavaliable=await User.findOne({email:userData.email});
        if(!Isavaliable){
            res.status(400);
            throw new Error('Pls register')
        }
        // authenticate Him or her
        if(Isavaliable.email===userData.email&&Isavaliable.password===userData.password){
            // authorize
            const accessToken=jwt.sign({
                user:{
                    username:Isavaliable.username,
                    email:Isavaliable.email,
                    id:Isavaliable.id
                }
            },process.env.ACCESS_TOKEN_SECRET,{expiresIn:'30m'});

            res.status(200).send({accessToken})
        }else{
            res.status(401);
            throw new Error('email or password not valid')
        }
        // res.status(200).send({
        //     messsage:'post user'
        // })
    }catch(err){
        console.log('err from log user',err.message)
    }
}

const currentUser=async(req,res)=>{
    res.status(200).send({
        messsage:'current user'
    })
}

module.exports={registerUser,loginUser,currentUser}