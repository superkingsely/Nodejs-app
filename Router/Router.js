const express=require('express')
const router=express.Router()
const Authorization=require('../Middlewares/authAndVerification')
const productController=require('../Controllers/productController')
// userController
const {
    register,
    login,
    UpdateUser,
    DeleteUser,
    GetUser,
    GetUsers
}=require('../Controllers/userController')



router.route('/register').post(register)
router.route('/login').post(login)
router.route('/update-user/:id').post(Authorization.verifyTokenAndAuth,UpdateUser)
router.route('/delete-user/:id').post(Authorization.verifyTokenAndAuth,DeleteUser)
// router.use(Authorization.verifyTokenAndAdmin)
router.route('/get-user/:id').get(Authorization.verifyTokenAndAdmin,GetUser)
router.route('/get-users').get(Authorization.verifyTokenAndAdmin,GetUsers)

// product crud
router.route('/create-product').post(Authorization.verifyTokenAndAdmin,productController.createProduct)
router.route('/update-product/:id').post(Authorization.verifyTokenAndAdmin,productController.UpdateProduct)
router.route('/delete-product/:id').post(Authorization.verifyTokenAndAdmin,productController.DeleteProduct)
router.route('/get-products').get(productController.GetProducts)
router.route('/get-product/:id').get(productController.GetProductById)
module.exports=router;