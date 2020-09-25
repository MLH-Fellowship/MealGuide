const { $where } = require('../models/userModel');
const User = require('../models/userModel');

exports.getUser = (req, res) => {
    return res.json(req.userReply);
}



exports.getUserCheck = (req,res,next) => {
    User.findOne({email : req.body.email})
        .exec((err, items) => {
            if(err) {
                return res.status(400).json({
                    error: "No entry found"
                });
            }
        req.userReply = items;
        next(); 
    });
}

exports.setUser = (req,res) => {

    const user = new User(req.body);
    user.save((err,feedback) => {
        if(err){
            return res.status(400).json({
                error: "Not able to save the user in the db"
            });
        }
        return res.json({
            user
        })
    })
}
