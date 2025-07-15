const userModel = require("../models/UserModel");
const bcrypt = require("bcryptjs")
const JWT = require("jsonwebtoken")

// REGISTER
let registercontroller = async (req,res) =>{

try {
   let{username, email , password}= req.body
//    validation
if(!username || !email || !password){
    return res.status(500).send({
        status:0,
        message: " please provide all field"
    })
}
// check exsisting user
const exsistingUser = await userModel.findOne({email})
if(exsistingUser){
    return res.status(500).send({
        status:0,
        message: " user already exsist"
    })
}
const salt  = await  bcrypt.genSalt(10)
const hashedpassword = await bcrypt.hash(password , salt)

// save user 
const newUser = new userModel({username , email , password:hashedpassword})
await newUser.save()
res.status(200).send({
        status:1,
        message: " user register succedfully"
    })
    
} catch (error) {
    console.log(error);
    res.status(500).send({
        status:0,
        message: "register API"
    })
    
}

}

// LOGIN
let logincontroller = async (req,res) =>{

try {
   const {email , password}= req.body
//    find user
   const user   = await userModel.findOne({email})
//    validation
if(!user){
    return res.status(400).send({
        status:0,
        message: " invalid email or password"
    })
}
// match password
const isMatch = await bcrypt.compare(password , user.password)
if(!isMatch){
    return res.status(401).send({
        status:0,
        message: " invalid credential"
    })
}
// Token
const token = JWT.sign({id : user._id} , process.env.JWT_SECRET , {expiresIn : "1d"})
return res.status(200).send({
        status:1,
        message: " user login succedfully",
        token,
        user
    })
    
} catch (error) {
    console.log(error);
    return res.status(500).send({
        status:0,
        message: "login API"
    })
    
}

}

module.exports = {registercontroller , logincontroller}