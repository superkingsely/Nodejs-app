const Contact=require('../Models/Contact')

const getContacts=async(req,res)=>{
    try{

        // const contacts=
        const contacts= await Contact.find();
        res.status(200).json(contacts)
    }catch(err){
        console.log("error from fetch array",err.message)
    }
}
const getContact=async(req,res)=>{
    try{

        const contact=await Contact.findById(req.params.id);
        if(!contact){
            res.status(404).send({
                message:"contact not found"
            })
        }

        res.status(200).send(contact)
    }catch(err){
        console.log('err frm get single contact',err.message)
    }
}
// create
const postContact=async(req,res)=>{
    try{
        const newdata=req.body;
        // check d newdata before the next line of code
        const newContact=await Contact.create({
            name:newdata.name,
            email:newdata.email,
            phone:newdata.phone
        })

        console.log(req.body)
        res.status(201).send(newContact)
    }catch(err){
        console.log('err from create' ,err.message)
    }
}
const putContact=async(req,res)=>{

    try{

        const contact=await Contact.findById(req.params.id);
        if(!contact){
            res.status(404)
            throw new Error('dat con not found')
        }
        // Edit
        const updatedContact=await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.status(200).send(updatedContact)
    }catch(err){
        console.log('err frm update contact',err.message)
    }
}

const deleteContact=async(req,res)=>{
    try{

        const contact=await Contact.findById(req.params.id);
        if(!contact){
            res.status(404).send({
                message:"contact not found"
            })
        }
        await Contact.findByIdAndDelete(req.params.id)
        res.status(200).send(contact)
    }catch(err){
        console.log('err frm del contact',err.message)
    }
}

module.exports={getContact,getContacts,postContact,deleteContact,putContact}