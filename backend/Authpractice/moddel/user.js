const mongoose=require("mongoose");
const Userschema=new mongoose.Schema({
   fullname:{
    type:String,
    require:true,
    trime:true,
    
   },
    email:{
        type:String,
        require:true,
        trime:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        trime:true
    },
    role:{
        type:String,
        require:true,
    }
  });
  module.exports = mongoose.model("User", Userschema);
