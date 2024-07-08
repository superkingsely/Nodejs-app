const jwt=require('jsonwebtoken')

const validateToken=async(req,res,next)=>{
    console.log('let me seee the validat req obj',req)
    try{
        let token;
        let authHeader=req.headers.Authorization||req.headers.authorization;
        if(authHeader&&authHeader.startsWith('Bearer')){
            token=authHeader.split(' ')[1]
            jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
                if(err){
                    res.status(401);
                    throw new Error('User is not authorizeirs')
                }

                // console.log(decoded)
                req.username=decoded.user;
                next();
            });
            if(!token){
                res.status(401);
                throw new Error ('User not authorize')
            }
        }
    }catch(err){
        console.log('error from val token',err.message)
    }
}

module.exports=validateToken