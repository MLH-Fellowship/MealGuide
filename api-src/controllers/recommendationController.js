
exports.getRecommendation = (req, res) => {
    if(req.recommendationReply != null)
    return res.json(req.recommendationReply);
    return res.json({error: "No entry found"});
}

exports.makeRecommendation = (req, res, next) => {

    var goal = req.userReply.goal;
    var needs = req.userReply.nutrient;
    var carb = needs.carb;
    var fat = needs.fat;
    var protein = needs.protein;
    var preference = req.userReply.preference;
    var mealPlan = req.collegeReply.mealsOffered;
    //console.log(mealPlan[0].nutrition.carb);
    var reply = new Object();

    //For BreakFast
    let breakfast;
    for(var i = 0; mealPlan[i]!=null; i++)
    {
        var meal = mealPlan[i];
        if(meal.mealTime.includes("Breakfast") && (meal.type == preference || preference == "Any"))
        {
            var better = true;
            var cpg = meal.nutrition.carb/meal.weight;
            var fpg = meal.nutrition.fat/meal.weight;
            var ppg = meal.nutrition.protein/meal.weight;
            //console.log(cpg+" "+fpg+ " " + ppg);
            //calculations
            
            if(better)
            breakfast = meal;
        }
    }
    reply.breakfast = breakfast;

    //For Lunch
    let lunch;
    for(var i = 0; mealPlan[i]!=null; i++)
    {
        var meal = mealPlan[i];
        if(meal.mealTime.includes("Lunch")  && (meal.type == preference || preference == "Any"))
        {
            var better = true;
            var cpg = meal.nutrition.carb/meal.weight;
            var fpg = meal.nutrition.fat/meal.weight;
            var ppg = meal.nutrition.protein/meal.weight;
            //calculations
            if(better)
            lunch = meal;
        }
    }
    reply.lunch = lunch;

    //For Dinner

    var dinner;
    for(var i = 0; mealPlan[i]!=null; i++)
    {
        var meal = mealPlan[i];
        if(meal.mealTime.includes("Dinner")  && (meal.type == preference || preference == "Any"))
        {
            var better = true;
            var cpg = meal.nutrition.carb/meal.weight;
            var fpg = meal.nutrition.fat/meal.weight;
            var ppg = meal.nutrition.protein/meal.weight;
            //calculations
            if(better)
            dinner = meal;
        }
    }
    reply.dinner = dinner;


    req.recommendationReply = (reply);
    next();
}

