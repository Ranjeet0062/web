const User=require("../moddel/user");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
require("dotenv").config();
exports.signup= async (req,res)=>{
   try{
     const {fullname,email,password,role}=req.body
   
    const userexit=await User.findOne({email});
    if(userexit){
        res.status(200).json({
            "success":false,
            "messege":"User is allready exist"
        })
    }
    let hashedpassword;
    try{
        hashedpassword=await bcrypt.hash(password,10);

    }catch(err){
       return res.status(201).json({
            "success":false,
            "massege":"error eccure while hashing the password"
        })
    }
    let user=await User.create({fullname,email,password:hashedpassword,role})
   return res.status(200).json({
        "success":"true",
        "massege":"usesr sign up seccessfully",
        "data":user
    })
   }catch(err){
   return res.status(200).json({
        "success":false,
        "massege":`error is ${err}`
    })
   }
}
exports.login=async (req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
        res.status(200).json({
            "success":false,
            massege:"plese fill all the details"
        })
    }
    let user= await User.findOne({email})
    if(user){
        if(await bcrypt.compare(password,user.password)){
            const payload={
                email,
                id:user._id,
                role:user.role
            }
            let token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn : "2h",
            });
            user.token=token
            const options = {
                expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly : true,
            }

            res.cookie("token",token,options).status(200).json({
                success : true,
                token,
                user,
                message:"User logged in successfully"
            });
        }else{
            res.status(400).json({
                success:false,
                "message":"passworld dose noot match"
            })
        }
    }else{
        res.status(400).json({
            "success":false,
            "message":"user does not exit plese signup first and then login again"
        })
    }
}