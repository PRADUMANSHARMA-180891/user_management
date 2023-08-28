const express =require('express');

const router =express.Router();
const {registerUser, loginmyUser} =require('../controllers/myuserController')


router.post("/register",registerUser);
router.post("/login",loginmyUser);
module.exports =router