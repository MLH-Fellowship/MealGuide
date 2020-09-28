const express = require('express');
const router = express.Router();

//Import Controllers
const {getCollege, getCollegeCheck ,setCollege, getAllColleges, deleteAllColleges} = require('../controllers/collegeController');

//Get the paths ready

router.post('/college/addCollege',setCollege);
router.post('/college/getCollege',getCollegeCheck,getCollege);
router.get('/college/getAllColleges', getAllColleges);
router.get('/college/deleteAllColleges', deleteAllColleges);

module.exports = router;