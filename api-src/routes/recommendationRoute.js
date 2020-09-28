const express = require('express');
const router = express.Router();

//Import Controllers
const {getRecommendation, makeRecommendation} = require('../controllers/recommendationController');
const {getCollegePlan} = require('../controllers/collegeController');
const {getUserCheck} = require('../controllers/userController');

//Get the paths ready

router.post('/user/getRecommendations',getUserCheck, getCollegePlan, makeRecommendation, getRecommendation);

module.exports = router;