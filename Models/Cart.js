const mongoose=require('mongoose')
const cartSchema=mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },

    products:[
        {
            productId:{
                type:String
            },
            quantity:{
                type:Number,
                default:1
            }
        },
    ]
    
},
{timestamps:true})
const CartModel=mongoose.model('Cart',cartSchema)
module.exports=CartModel