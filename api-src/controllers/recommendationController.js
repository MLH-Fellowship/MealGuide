const {getMealRecommendation} = require('../microservices/nutrition');

exports.getRecommendation = (req, res) => {
    if(req.recommendationReply != null)
    return res.json(req.recommendationReply);
    return res.json({error: "No entry found"});
}

exports.makeRecommendation = (req, res, next) => {

    var mealRecommendation = getMealRecommendation(req);
    req.recommendationReply = (mealRecommendation);
    next();
    
}

