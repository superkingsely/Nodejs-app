const express=require('express')
const app=express()
const cors=require('cors')


app.use(cors())
app.post('/create-payment-intent',async(req,res)=>{
    try{
    const paymentIntent=await Stripe.paymentIntents.create({
        currency:'eur',
        amount:1999,
        automatic_payment_methods:{
            enabled:true,
        }
    })
    res.send({clientSecret:paymentIntent.client_secret})
    }catch(e){
        return res.status(400).send({
            error:{
                message:e.message
            }
        })
    }
    })

app.listen(5000,()=>{
    console.log('appp is runing dear')
})