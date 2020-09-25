const express = require('express');
const router = express.Router();

//Import Controllers
const {getUser, getUserCheck ,setUser} = require('../controllers/userController');

//Get the paths ready

router.post('/user/addUser',setUser);
router.post('/user/getUser',getUserCheck,getUser);

module.exports = router;