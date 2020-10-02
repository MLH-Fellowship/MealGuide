require('dotenv').config();

//import files and libraries
const cheerio = require('cheerio');
const fs = require("fs")
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const passportSetup = require('./config/passportConfig');
const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({
    extended: true
}));


//getting the route ready
const userRoutes = require('./routes/userRoute');
const collegeRoutes = require('./routes/collegeRoute');
const recommendationRoute = require('./routes/recommendationRoute');
const authRoute = require('./routes/authRoute');
const tempUserRoute = require('./routes/tempUserRoute');


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
mongoose.connect(process.env.MONGODB_URI ||
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    "mongodb://127.0.0.1:27017/mealguidedb",{
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
app.use('/api', authRoute);
app.use('/api',tempUserRoute);

//test
app.post('/test', (req,res)=>{
    console.log(req.body);
    return res.json(req.body);
});

//app start
app.listen(port, () => {
    console.log(`app is running at:`)
    console.log(`http://localhost:${port}`)
})