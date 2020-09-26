const express = require('express');
const router = express.Router();

//Import Controllers
const {getCollege, getCollegeCheck ,setCollege} = require('../controllers/collegeController');

//Get the paths ready

router.post('/college/addCollege',setCollege);
router.post('/college/getCollege',getCollegeCheck,getCollege);

module.exports = router;