const express=require("express");
const User= require('../model/usermodel');
const userValidationSchema= require('../validation/userValidation');
const router=express.Router();

router.post('/users', async(req,res)=>{
    try{
        const vailidateData= userValidationSchema.parse(req.body);
        const user=new User(vailidateData);
        await user.save();
        res.status(201).send(user);
    }
    catch(error){
        res.status(400).send(error.message);
    }
});

module.exports=router;