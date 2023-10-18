const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

//Register User
router.post("/register", async (req,res) => {
    try {
        //generate salt to encrypt passwords
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        //create new user
        const newUser = new User({
            username: req.body.username,
            email:req.body.email,
            password: hashedPassword,
        });
    //save new user and respond
        const user = await newUser.save()
        res.status(200).json(user)
    } catch(err){
        console.log(err)
    }
})

//LOGIN
router.post("/login", async (req,res) =>{
    try{
        const user = await User.findOne({email:req.body.email})

        if (!user){
            res.status(404).json("user not found")
            return
        } else if(await bcrypt.compare(req.body.password, user.password) === false) {
            res.status(400).json('wrong password')
            return
         } 
        else {
            res.status(200).json(user)
        }
        
    } catch(err) {
        res.status(500).json(err)
    }

})

module.exports = router