const mongoose = require('mongoose');

var mealSchema = new mongoose.Schema({
    unique: false,
    name: {
        type: String,
        required: true,
        trim: true
    },
    //Cost will be always entered in local currency of the university
    cost: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    nutrition: {
        //carbohydrates can be in per 100gms.
        //The value can be used as standard everywhere
        carb: {
            required: true,
            type: Number
        },
        protein: {
            required: true,
            type: Number
        },
        fat: {
            required: true,
            type: Number
        },
        //Can add more nutrients in AddOns
    },
    type: {
        //Veg or Non Veg or Any
        type: String,
        required: true
    },
    mealTime: [
        //Breakfast, Lunch, Snack or Dinner
        {type: String}
    ]

});

module.exports = mealSchema;
