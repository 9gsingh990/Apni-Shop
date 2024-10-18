import express from 'express'
import {registerController,loginController, forgotPasswordController, updateProfileController, getOrdersController} from '../controllers/authController.js'
import {isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
//router object
const router=express.Router()

//routing

//Register|| Method post
router.post('/register',registerController);

//Forgot Password || POST
router.post('/forgot-password',forgotPasswordController);

//login||POST 
router.post('/login',loginController);

//proctected User route auth
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})

//orders
router.get('/orders',requireSignIn,getOrdersController);

//update profile
router.put('/profile',requireSignIn,updateProfileController)

// //proctected Admin route auth
// router.get('/admin-auth',isAdmin, requireSignIn,(req,res)=>{
//     res.status(200).send({ok:true});
// })



export default router;