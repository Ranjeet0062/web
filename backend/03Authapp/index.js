require("dotenv").config();
// const connect=require("./config/databasecon")
const express=require("express");
const cookieparse=require("cookie-parser")
const app=express();
app.use(express.json());
app.use(cookieparse);

const user = require("./routes/user");
 app.use("/api/v1",user);
 app.listen(process.env.PORT,()=>{
    console.log(`app listing on ${process.env.PORT} port`)
 })
 require("./config/databasecon").connect()

 app.get("/",(req,res)=>{
        res.send("<h1>This is Home Page</h1>")
 })