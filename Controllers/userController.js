const data = require("../Data")
const UserModel = require("../Models/User")
const jwt=require('jsonwebtoken')

//POST== /api/register

const register=async(req,res)=>{
    if(req.body.username&&req.body.email&&req.body.password===''){
        res.status(500).json({
            message:'Pls complete your credential'
        })
    }else{
        const newUser= new UserModel({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
        })
        try{
            console.log('trying to say db')
            const savedUser=await newUser.save()
            res.status(201).json(savedUser);
            // const savedUser=data.push(newUser)
            // console.log(savedUser,data)
            // res.status(201).json(data)
        }catch(err){
            console.log('okay',err.message)
            res.status(500).json({
                error:'Server error'
            })
        }
    }
}
//POST== /api/login access token for users

const login=async(req,res)=>{
    if(req.body.username&&req.body.password===''){
        res.status(500).json({
            message:'Pls complete your credential'
        })
    }else{
       
        try{
            console.log('trying to log db')
            const user=await UserModel.findOne({username:req.body.username})
            if(!user)
            alt== !user && res.status(401).json("wrong credential")
            // for the password
            // const hasedpassword=CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC)
            // const userpassword=hasedpassword.toString(CryptoJS.enc.utf8);
            const userpassword=user.password
            userpassword!==req.body.password &&res.status(401).json('wrong credentials')
            // alt == if(userpassword!==req.body.password)
            // JWT HERE
            const accessToken=jwt.sign({
                id:user._id,
                isAdmin:user.isAdmin,
            },process.env.JWT_SEC,{expiresIn:'3d'})
            // const{password,...others}=user[0]._doc for my dummy data
            const{password,...others}=user._doc
            res.status(201).json({...others,accessToken})
            // const user= data.filter(obj=>obj.username===req.body.username)
            // console.log(user,data)
            // if(user[0].username!==req.body.username){
            //     // throw new Error('wrong credential')
            //     res.status(500).send('wrong crendential')
            // }else if(user[0].password!==req.body.password){
            //     res.status(500).send('wrong crendential')
            // }else{
                
            //     const{password,...others}=user[0]._doc
            //     res.status(201).json(others)
            // }


        }catch(err){
            console.log(err.message)
            res.status(500).json({
                error:'Server error ' + err.message
            })
        }
    }
}
// POST==/api/update-user/:id
const UpdateUser=async(req,res)=>{
    // if hased password
    try{

        const UpdatedUser=await UserModel.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            {new:true}
        )
        res.status(200).json(UpdatedUser)
    }catch(err){
        console.log(err.message,'forom updated user')
    }
}
// POST==/api/delete-user/:id

const DeleteUser=async(req,res)=>{
    // if hased password
    try{

        await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message:`Deleted  ${req.username} `})
    }catch(err){
        console.log(err.message,'forom updated user')
    }
}
// POST==/api/get-user/:id

const GetUser=async(req,res)=>{
    try{
        const user=await UserModel.findById(req.params.id)
        const{password,...others}=user._doc;
        res.status(200).json(others)
    }catch(err){
        console.log(err.message,'forom updated user')
    }
}
// POST==/api/get-users/:id

const GetUsers=async(req,res)=>{
    try{
        const users=await UserModel.find()
        res.status(200).json(users)
    }catch(err){
        console.log(err.message,'forom updated user')
    }
}

module.exports={register,login,UpdateUser,DeleteUser,GetUser,GetUsers}