const mongoose=require("mongoose");
require("dotenv").config();
const dbconnection=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(()=>{console.log("connection establish succesfully")})
    .catch((err)=>{console.log(err)})
}
module.exports=dbconnection