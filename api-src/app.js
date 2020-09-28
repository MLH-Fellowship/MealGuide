const cheerio = require('cheerio');
const fs = require("fs")
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require('./routes/userRoute');
const collegeRoutes = require('./routes/collegeRoute');
const recommendationRoute = require('./routes/recommendationRoute');


//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: 'Unauthorized!' });
    }
});

//port to run the app
const port = process.env.PORT||8000;

//db connect
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mealguidedb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB Connected");
});

mongoose.connection.on('error', (err) => {
    console.log(`DB connection error: ${err.message}`);
});

//api endpoints or routes
app.use('/api',userRoutes);
app.use('/api',collegeRoutes);
app.use('/api',recommendationRoute);

// //passport - google sign in

// const passport = require("passport");
// app.use(passport.initialize());
// app.use(passport.session());
// const gStrategy = require("passport-google-oauth20");
// var keys = require('./ids');

// passport.serializeUser(function (user, cb){
//     cb(null, obj);
// });

// passport.deserializeUser(function(obj, cb){
//     cb(null, obj);
// });

// passport.use(new gStrategy({
//         clientID: keys.clientid,
//         clientSecret: keys.clientSecret,
//         callbackURL : keys.callbackURL
//     },
//     function(accessToken, refreshToken, profile, done) {
//         done(null, {});
//     }
// ));

// app.get('/auth/google', passport.authenticate('google',{scope:['profile']}));





//app start
app.listen(port, () => {
    console.log(`app is running at:`)
    console.log(`http://localhost:${port}`)
})