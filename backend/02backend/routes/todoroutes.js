const express = require("express");
const router = express.Router();
const {createTodo}=require("../controllers/createTode")
const {getTodo,getTodobyId}=require("../controllers/getTodo")
const {updateTodo}=require("../controllers/updateTodo")
const {deleteTodo}=require("../controllers/deleteTodo")
router.post("/createTodo",createTodo)
router.get("/getTodo",getTodo)
router.get("/getTodo/:id",getTodobyId)
router.put("/updateTodo/:id",updateTodo)
router.delete("/deleteTodo/:id",deleteTodo)

module.exports = router;