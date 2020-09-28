const User = require('../models/userModel');

exports.getUser = (req, res) => {
    if(req.userReply != null)
    return res.json(req.userReply);
    return res.json({error: "No entry found"});
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
        });
    });
}

exports.deleteAllUsers = (req,res) => {
    User.remove({},(err,obj)=>{
        if(err){
            return res.status(400).json({
                error: "Failed to delete Users"
            })
        }
        return res.json({
            message: "Users deleted successfully"
        })
    })
}
