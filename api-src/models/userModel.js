const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
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
    username: {
        type: String,
        required: false,
        trim: true,
        default: function() {
            const _t = this;
            return _t.firstname +" "+ _t.lastname;
        }
    },
    points: {
        type: Number,
        required: false,
        default: 0,
    },
    weight: {
        type: Number, //in kgs
        required: true,
    },
    height: {
        type: Number, //in cms
        required: true,
    },
    bmi: {
        type: Number,
        required: false,
        default: function() {
            const _t = this;
            return _t.weight/ (Math.pow(_t.height, 2) / 10000);
        }
    },
    age: {
        type: Number, // in yrs
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    //Veg or Non Veg or Any
    preference: {
        type: String,
        required: true
    },
    mealsPerDay: {
        type: Number,
        required: true,
    },
    goal: {
        type: String,
        required: true
    },
    //Nutrient Multiplier [in range -3 to 3]
    nutrient: {
        carb: {
            type: Number,
            default: 0
        },
        fat: {
            type: Number,
            default: 0
        },
        protein: {
            type: Number,
            default: 0
        },
        required: false
    }
    //Advanced to be added later

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
