const College = require('../models/collegeModel');

exports.getCollege = (req, res) => {
    if(req.collegeReply != null)
    return res.json(req.collegeReply);
    return res.json({error: "No entry found"});
}

exports.getCollegeCheck = (req,res,next) => {
    College.findOne({collegeName : req.body.collegeName})
        .exec((err, items) => {
            if(err) {
                return res.status(400).json({
                    error: "No entry found"
                });
            }
        req.collegeReply = items;
        next(); 
    });
}

exports.setCollege = (req,res) => {

    const college = new College(req.body);
    college.save((err,feedback) => {
        if(err){
            return res.status(400).json({
                error: "Not able to save the college in the db"
            });
        }
        return res.json({
            college
        });
    });
}
