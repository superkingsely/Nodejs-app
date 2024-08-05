const jwt=require('jsonwebtoken')
const verifyToken=(req,res,next)=>{
    try{

        const HeaderToken=req.headers.token
        if(!HeaderToken){
            console.log(HeaderToken)
            return res.status(403).json({error:'No token provided'})
        }else{
            const token=HeaderToken.split(" ")[1]
            jwt.verify(token,process.env.JWT_SEC,(err,decodedPayload)=>{
                if(err)res.status(401).json({error:'invalid token'});
                req.user=decodedPayload;
                next();
            })
        }
    }catch(err){
        console.log(err.message,'from try catch worked')
    }

}
const verifyTokenAndAuth=(req,res,next)=>{
    
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next()
        }else{
            return res.status(403).json({error:'u are not authorize'})
        }
    })
}
const verifyTokenAndAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if( req.user.isAdmin){
            next()
        }else{
            return res.status(403).json({error:'u are not authorize admin only'})
        }
    })
}

module.exports={verifyToken,verifyTokenAndAuth,verifyTokenAndAdmin}