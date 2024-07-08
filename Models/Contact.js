const mongoose=require('mongoose')

// to prepare the contact collection|table|schema
const contactSchema=mongoose.Schema({
    // for auth
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:String,
        required:[true,'Pls add name']
    },
    email:{
        type:String,
        required:[true,'Pls add emil']
    },
    phone:{
        type:String,
        required:[true,'Pls add phone']
    },
},
{
    timestamps:true
}
)
module.exports=mongoose.model('Contact',contactSchema)