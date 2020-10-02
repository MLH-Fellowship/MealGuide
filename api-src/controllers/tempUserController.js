const TempUser = require('../models/tempUserModel');

exports.getTempUser = (req, res) => {
    if(req.tempUserReply != null)
    {
        return res.json(req.tempUserReply);
    }
    return res.json({error: "No entry found", present: false});
}

exports.getTempUserCheck = (req,res,next) => {
    TempUser.findOne({email : req.body.email})
        .exec((err, items) => {
            if(err) {
                return res.status(400).json({
                    error: "No entry found"
                });
            }
        console.log(items);
        req.tempUserReply = items;
        next(); 
    });
}

exports.setTempUser = (req,res) => {

    const tempUser = new TempUser(req.body);
    tempUser.save((err,feedback) => {
        if(err){
            console.log(err);
            return res.status(400).json({
                error: "Not able to save the TempUser in the db"
            });
        }
        return res.json({
            tempUser
        });
    });
}

exports.getTempUserInfo = async(e) => {

    try{
        let res = await TempUser.findOne({email : e})
        if(res!=null)
        return res;
        else
        return {error: "No entry found", present: false};
    }
    catch(err){
        console.log(err);
    }
}

exports.setTempUserInfo = async(e) => {

    var obj = new Object;
    obj.email = e.email;
    obj.firstname = e.given_name;
    obj.lastname = e.family_name;
    obj.profilepicture = e.picture;
    obj.age = 20;
    obj.gender = "Male";
    const tempUser = new TempUser(obj);

    try{
        let res = await tempUser.save((err,feedback) => {
            if(err){
                return {
                    error: "Not able to save the TempUser in the db"
                };
            }
            return {
                tempUser
            };
        });
    }
    catch(err){
        console.log(err);
    }
}

exports.getAllTempUsers = (req,res) => {
    TempUser.find({})
        .exec((err, items) => {
            if(err){
                return res.status(400).json({
                    error: "No colleges found"
                });
            }
            res.json(items);
        });
}

exports.deleteAllTempUsers = (req,res) => {
    TempUser.remove({},(err,obj)=>{
        if(err){
            return res.status(400).json({
                error: "Failed to delete Temp Users"
            })
        }
        return res.json({
            message: "Temp Users deleted successfully"
        })
    })
}