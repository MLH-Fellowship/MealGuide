const meals = require('./mealsdummy.json')

const responseMeals = JSON.stringify(meals);
console.log(responseMeals)
const parsedData = JSON.parse(responseMeals);
console.log(parsedData.breakfast)