const express=require("express");
const router=express.Router();
const {signup,login}=require("../controller/userauth.controller")
const {auth,isStudent,isAdmin}=require("../middelware/Auth")
const {localserverfile}=require("../controller/filehandel.controller")

router.post('/signup',signup)
router.get('/login',login)
router.get("/student", auth, isStudent, (req, res) => {
    return res.json({
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
router.post("/localstorage",localserverfile)
module.exports = router;