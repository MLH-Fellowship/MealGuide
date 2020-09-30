const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

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
        //console.log(profile.displayName);
        return done(null, profile);
    })
);