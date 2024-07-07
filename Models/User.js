const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,'username required']
    },
    email:{
        type:String,
        required:[true,'email required'],
        unique:[true,'email most be unique']
    },
    password:{
        type:String,
        required:[true,'passwrd required']
    },
},
// timestamp
{
    timestamps:true,
}
)
module.exports=mongoose.model('User',userSchema)

