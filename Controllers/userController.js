const data = require("../Data")
const UserModel = require("../Models/User")

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
            console.log('trying to say')
            // const savedUser=await newUser.save()
            // res.status(201).json(savedUser);
            const savedUser=await data.push(newUser)
            console.log(savedUser,data)
            res.status(201).json(data)
        }catch(err){
            console.log(err.message)
            res.status(500).json({
                error:'Server error'
            })
        }
    }
}
//POST== /api/login

const login=async(req,res)=>{
    if(req.body.username&&req.body.password===''){
        res.status(500).json({
            message:'Pls complete your credential'
        })
    }else{
       
        try{
            console.log('trying to log')
            // const user=await user.findOne({username:req.body.username})
            // if(!user)
            // alt== !user && res.status(401).json("wrong credential")
            // for the password
            // const hasedpassword=CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC)
            // const userpassword=hasedpassword.toString(CryptoJS.enc.utf8);
            // userpassword!==req.body.password &&res.status(401).json('wrong credentials')
            // alt == if(userpassword!==req.body.password)
            // JWT HERE
            // const accessToken=jwt.sign({
            //     id:user._id,
            //     isAdmin:user.isAdmin,
            // },process.env.JWT_SEC,{expiresIn:'3d'})
            // const{password,...others}=user[0]._doc
            // res.status(201).json(others,accessToken)
            const user= data.filter(obj=>obj.username===req.body.username)
            console.log(user,data)
            if(user[0].username!==req.body.username){
                // throw new Error('wrong credential')
                res.status(500).send('wrong crendential')
            }else if(user[0].password!==req.body.password){
                res.status(500).send('wrong crendential')
            }else{
                
                const{password,...others}=user[0]._doc
                res.status(201).json(others)
            }
        }catch(err){
            console.log(err.message)
            res.status(500).json({
                error:'Server error ' + err.message
            })
        }
    }
}
module.exports={register,login}