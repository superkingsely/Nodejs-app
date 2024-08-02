const express=require('express')
const router=express.Router()
// userController
const {
    register,
    login
}=require('../Controllers/userController')



router.route('/register').post(register)
router.route('/login').post(login)
module.exports=router;