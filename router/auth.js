const express = require('express');
const router = express.Router();

require('../db//connection');
const User = require("../model/userSchema");


router.get('/',(req,res)  => {
    res.send('inside server router js');
});





router.post('/register',(req,res)=>{

    const { name , email , phone , work , password , cpassword} = req.body;

    if(!name || !email || ! phone || !password || !work || !cpassword){

        return res.json({error: "fill properly!!"});

    }

    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist)
        return res.status(422).json({ error :"email exists already"});
        
        const user = new User({name, email, phone , work , password , cpassword});

        user.save().then(() => {
            res.status(201).json({message: "registered !! "});
        }).catch((err) => res.status(500).json({error: "failed to register !! "}));


    }).catch(err => {console.log(err); });


    console.log(req.body);
    res.json({message:req.body});
});






module.exports = router