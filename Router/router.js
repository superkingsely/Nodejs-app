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
// user cntroller
const {registerUser,loginUser,currentUser}=require('../Controller/Users')

// contacts resource
router.route('/').get(getContacts).post(postContact);
router.route('/:id').get(getContact).put(putContact).delete(deleteContact)
router.route('/users/login').post(loginUser)
router.route('/users/register').post(registerUser)
router.route('/users/current').post(currentUser)


module.exports=router