
const getContacts=(req,res)=>{

    res.status(200).send({
        message:'Hello world'
    })
}
const getContact=(req,res)=>{

    res.status(200).send({
        message:`okay from ${req.params.id}`
    })
}
const postContact=(req,res)=>{
    console.log(req.body)
    res.status(201).send({
        message:'Hello world post'
    })
}
const putContact=(req,res)=>{

    res.status(202).send({
        message:'Hello world put'
    })
}
const deleteContact=(req,res)=>{
    res.status(204).send({
        message:'Hello world del'
    })
}

module.exports={getContact,getContacts,postContact,deleteContact,putContact}