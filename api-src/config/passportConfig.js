const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {getTempUserInfo, setTempUserInfo} = require('../controllers/tempUserController');

passport.serializeUser(function (user, cb){
    cb(null, user.id);
});

passport.deserializeUser(function(obj, cb){
    cb(null, obj);
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        callbackURL: process.env.callbackURL
    }, (accessToken, refreshToken, profile, done) => {
        console.log('passport callback function fired:');
        profile.isPresent = false;
        var email = profile._json.email;
        
        //Check if user exists
        getTempUserInfo(email).then(res => {
            console.log("res => ",res);
            if(res.present)
            profile.isPresent = true;
            else
            {
                setTempUserInfo(profile._json);
            }
            return done(null, profile);
        });        
    })
);