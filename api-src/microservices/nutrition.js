getUserNutrition = (req) => {

    var goal = req.userReply.goal;
    var correction = 0;
    if(goal == 'Gain Weight')
    correction = 200;
    else if(goal == 'Lose Weight')
    correction = -200;

    var weight = req.userReply.weight;
    var height = req.userReply.height;
    var age = req.userReply.age;
    var gender = req.userReply.gender;
    var bmr = 0;
    if(gender = 'Male')
    {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    }
    else
    {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    bmr = bmr + correction;
    var pro = weight/2 + correction/100;

    var breakfast = new Object;
    breakfast.calNeeds = 0.4 * bmr;
    breakfast.proNeeds = 0.4 * pro;

    var lunch = new Object;
    lunch.calNeeds = 0.3 * bmr;
    lunch.proNeeds = 0.3 * pro;

    var snacks = new Object;
    snacks.calNeeds = 0.1 * bmr;
    snacks.proNeeds = 0.1 * pro;

    var dinner = new Object;
    dinner.calNeeds = 0.2 * bmr;
    dinner.proNeeds = 0.2 * pro;

    var response = new Object;
    response.breakfast = breakfast;
    response.lunch = lunch;
    response.snacks = snacks;
    response.dinner = dinner;
    
    return response;
}

getMealRating = (requirement, mealNutrients) => {

    var calPerCarb = 4;
    var calPerPro = 4;
    var calPerFat = 9;

    var calNeed = requirement.calNeeds;
    var proNeed = requirement.proNeeds;

    var mealCarb = mealNutrients.carb;
    var mealPro = mealNutrients.protein;
    var mealFat = mealNutrients.fat;

    var mealCal = mealNutrients.carb * calPerCarb + mealPro * calPerPro + mealFat * calPerFat;

    var rating = 0;
        
    var calvalue = calNeed - mealCal;
    var provalue = proNeed - mealPro;

    rating = rating + mealCal;

    if( (calvalue < 0.08*calNeed) && (calvalue > -0.08*calNeed) )
    rating = rating + 100;
    if( calvalue <-0.08 * calNeed)
    rating = rating - 80;
    
    if( (provalue < 0.08*calNeed) && (provalue > -0.08*calNeed) )
    rating = rating + 100;
    if( provalue < -0.08 * calNeed)
    rating = rating - 30;
    if( provalue > 0.08 * calNeed)
    rating = rating - 40;
    
    return rating;

}

getRecommendationsForAMeal = (mealName, mealPlan, preference, requirement) => {

    let  recommarray = [];
    let response = []; 

    for(var i = 0; mealPlan[i]!=null; i++)
    {
        var meal = mealPlan[i];
        
        if(meal.mealTime.includes(mealName) && (meal.type.includes(preference) || preference == "No Preference") )
        {
            var m = new Object;
            var mealScore = getMealRating(requirement, meal.nutrition);
            m.score = mealScore;
            m.meal = meal;
            recommarray.push(m);
        }
    }

    recommarray.sort((f,s)=>s.score-f.score);
    for(var i = 0; i<3 && (recommarray[i]!=null); i++)
    {
        response.push(recommarray[i].meal);
    }
    
    return response;

}

exports.getMealRecommendation = (req) => {

    var requirements = getUserNutrition(req);
    var mealPlan = req.collegeReply.mealsOffered;
    var preference = req.userReply.preference;

    var response = new Object;

    response.breakfast = getRecommendationsForAMeal("Breakfast", mealPlan, preference, requirements.breakfast);
    response.lunch = getRecommendationsForAMeal("Lunch", mealPlan, preference, requirements.lunch);
    response.snacks = getRecommendationsForAMeal("Snacks", mealPlan, preference, requirements.snacks);
    response.dinner = getRecommendationsForAMeal("Dinner", mealPlan, preference, requirements.dinner);

    return response;    

}