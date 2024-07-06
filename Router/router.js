const express=require('express')
const router=express.Router();
// contacts controllers
const {
    getContact,
    getContacts,
    postContact,
    deleteContact,
    putContact
}=require('../Controller/ContactController')

// contacts resource
router.route('/').get(getContacts).post(postContact);
router.route('/:id').get(getContact).put(putContact).delete(deleteContact)



module.exports=router