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
const {registerUser,loginUser,currentUser}=require('../Controller/Users');
const validateToken = require('../Middleware/ValidateTokenHandler');

// 
router.route('/user/login').post(loginUser)
router.route('/user/register').post(registerUser)
router.get('/user/current',validateToken, currentUser)
// contacts resource
router.use(validateToken);
router.route('/').get(getContacts).post(postContact);
router.route('/:id').get(getContact).put(putContact).delete(deleteContact)


module.exports=router