const mongoose = require('mongoose');
var mealModel = require('./mealModel');

var collegeSchema = new mongoose.Schema({
    collegeName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    mealsOffered: [
        mealModel
    ],
    collegeLoc: {
        lat: {
            type: Number,
            required: true
        },
        long: {
            type: Number,
            required: true
        },
    }
}, { timestamps: true });

module.exports = mongoose.model("College", collegeSchema);
