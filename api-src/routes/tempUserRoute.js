const express = require('express');
const router = express.Router();

//Import Controllers
const {getTempUser, getTempUserCheck ,setTempUser,getAllTempUsers, deleteAllTempUsers} = require('../controllers/tempUserController');

//Get the paths ready

router.post('/user/addTempUser',setTempUser);
router.get('/user/getAllTempUsers',getAllTempUsers);
router.post('/user/getTempUser',getTempUserCheck,getTempUser);
router.get('/user/deleteAllTempUsers', deleteAllTempUsers);

module.exports = router;