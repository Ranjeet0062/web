const express=require("express");
const dbconnection=require ("./config/database")
const todoRoutes = require("./routes/todoroutes");

const app=express();
app.use(express.json());
require("dotenv").config();
PORT=process.env.PORT||3000;
//app listen to port
app.listen(PORT,()=>{
    console.log(`app listen at ${PORT} port` )
})
//mount routes
app.use("/api/v2",todoRoutes)

//default routes
app.get('/',(req,res)=>{
res.send("<h1>this is home page</h1>")
})
//DB connection
dbconnection();

