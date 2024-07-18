const Todo = require("../models/Todo");
exports.getTodo = async(req,res) => {
    try {
          const response=await Todo.find({});
          res.status(200).json({
            success:true,
            data:response,
            message:"data  fatched sucessfully"
          })
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}
exports.getTodobyId = async(req,res) => {
    try {
        const id=req.params.id
          const response=await Todo.findById({_id:id});
          res.status(200).json({
            success:true,
            data:response,
            message:"data  fatched sucessfully"
          })
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}