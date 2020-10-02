const express = require('express');
const router = express.Router();

//Import Controllers
const {getUser, getUserCheck ,setUser, deleteAllUsers} = require('../controllers/userController');
const {getTempUserCheck} = require('../controllers/tempUserController');

//Get the paths ready

router.post('/user/addUser',getTempUserCheck,setUser);
router.post('/user/getUser',getUserCheck,getUser);
router.get('/user/deleteAllUsers',deleteAllUsers);

module.exports = router;