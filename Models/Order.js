const mongoose=require('mongoose')
const orderSchema=mongoose.Schema({
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
    ],
    amount:{
        type:String,
        required:true
    },
    address:{
        type:Object,
        required:true
    },
    status:{
        type:String,
        default:'Pending...'
    },
    
},
{timestamps:true})
const OrderModel=mongoose.model('Order',orderSchema)
module.exports=OrderModel