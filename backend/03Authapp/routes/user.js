const express=require("express");
const router=express.Router();
const {signup,login}=require("../controller/Auth")
const {auth,isStudent,isAdmin}=require("../moddleware/auth")
router.post('/signup',signup)
router.get('/login',login)
// Protected Route for Student
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Protected Route for Student"
    })
});

// Protected Route for Admin 
router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Protected Route for Admin"
    })
});
module.exports = router;