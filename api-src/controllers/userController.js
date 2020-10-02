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

    console.log("BODY => ",req.body.email);

    var object = new Object;
    object.email = req.tempUserReply.email;
    object.firstname = req.tempUserReply.firstname;
    object.lastname = req.tempUserReply.lastname;
    object.profilepicture = req.tempUserReply.profilepicture;
    object.weight = req.body.Weight;
    object.height = req.body.Height;
    object.age = req.tempUserReply.age;
    object.gender = req.tempUserReply.gender;
    object.college = req.body.College;
    object.preference = req.body.Preference;
    object.mealsPerDay = req.body.Meals || 4;
    object.goal = req.body.Goal;

    const user = new User(object);
    user.save((err,feedback) => {
        if(err){
            console.log(err);
            return res.status(400).json({
                error: "Not able to save the user in the db"
            });
        }
        res.redirect(process.env.successURLsuggest+'?email='+req.tempUserReply.email+'&auth=true');
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
