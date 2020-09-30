const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./ids');

passport.serializeUser(function (user, cb){
    cb(null, user.id);
});

passport.deserializeUser(function(obj, cb){
    cb(null, obj);
});

passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: process.env.callbackURL
        //callbackURL: 'http://localhost:8000/api/auth/google/callback/'
    }, (accessToken, refreshToken, profile, done) => {

        console.log("HERE!!");
        console.log('passport callback function fired:');
        //console.log(profile);
        console.log(profile.displayName);
        return done(null, profile);
    })
);