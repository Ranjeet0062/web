const bcrypt = require('bcrypt');
const User=require("../models/User");
const jwt = require("jsonwebtoken")

exports.signup=async (req,res)=>{
            try{
                const {name,email,password,role}=req.body
                const userexist= await User.findOne({email});
                if(userexist){
                    res.status(200).json({
                        "success":false,
                        "messege":"User is allready exist"
                    })
                }
                let hashpasssword;
                try {
                    hashpasssword = await bcrypt.hash(password, 10);
                }
                catch (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Error in hashing password",
                    })
                }
                let user=await User.create({
                    name,email,password:hashpasssword,role
                })
                return res.status(200).json({
                    success : true,
                    message : "User Created Successfully",
                    data : user
                });

            }catch(err){
                console.error(err);
            }
}
exports.login=async (req,res)=>{
    try{
        const {email,password}=req.body
        if(!email || !password)
        {
            return res.status(400).json({
                success:false,
                message : "Please fill all the details carefully",
            })
        }
        const user=await User.findOne({email});

        if(user){
            const payload = {
                email : user.email,
                id : user._id,
                role : user.role,
            };
            if(await bcrypt.compare(password,user.password)){
                let token = jwt.sign(payload,process.env.JWT_SECRET,{
                    expiresIn : "2h",
                });
                user.token=token;
                user.password=undefined;
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
                return res.status(403).json({
                    success : false,
                    message : "Password does not match",
                })
            }
        }else{
            res.status(200).json({
                "success":false,
                "message":"user doesn't exist"
            })
        }

    }catch(err){
        console.error(err)
        return res.status(500).json({
            success: false,
            message: "An error occurred while logging in.",
        });
    }
}