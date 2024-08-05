const Product=require('../Models/Product')

// create
const createProduct=async(req,res)=>{
    const newProduct= new Product(req.body)
    try{
        const savedProduct=await newProduct.save();
        res.status(200).json(savedProduct)
    }catch(err){
        console.log(err.message)
        res.status(500).json(err.message)
    }
}
// read all
// GET==/api/get-products
const GetProducts=async(req,res)=>{
    try{
        const products=await Product.find()
        res.status(200).json(products)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}
// read one
// GET==/api/get-product/:id
const GetProductById=async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}
// update one
// GET==/api/update-product/:id
const UpdateProduct=async(req,res)=>{
    try{
        const updatedproduct=await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            {new:true}
        )
        res.status(200).json(updatedproduct)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

// delete one
// GET==/api/delete-product/:id
const DeleteProduct=async(req,res)=>{
    try{
        const delproduct=await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({message:`${delproduct.title} is deleted`})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}
module.exports={createProduct,GetProducts,GetProductById,UpdateProduct,DeleteProduct}