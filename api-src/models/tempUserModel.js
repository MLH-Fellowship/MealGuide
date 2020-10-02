const mongoose = require('mongoose');

var tempUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    firstname: {
       type: String,
       required:true,
       trim: true,
       maxlength: 20
    },
    lastname: {
        type: String,
        required:false,
        trim: true,
        default: '',
        maxlength: 20
    },
    profilepicture: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number, // in yrs
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    present: {
        type: Boolean,
        required: false,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model("TempUser", tempUserSchema);
