 ## User Dummy Json To Push to Server

 ~~~
{
    "email": "harsh.vardhan@gmail.com",
    "firstname": "Harsh",
    "lastname": "Vardhan",
    "username": "CallmeHarsh",
    "points": 0,
    "weight": 65,
    "height": 180,
    "age": 20,
    "gender": "Male",
    "college": "Harvard University",
    "preference": "Non Veg",
    "mealsPerDay": 3,
    "goal": "Maintain"
}
 ~~~

 ~~~
 {
    "email": "utkarsh.anand@gmail.com",
    "firstname": "Utkarsh",
    "lastname": "Anand",
    "username": "Anand aa gya",
    "points": 0,
    "weight": 70,
    "height": 183,
    "age": 20,
    "gender": "Male",
    "college": "Harvard University",
    "preference": "Veg",
    "mealsPerDay": 3,
    "goal": "Maintain"
}
 ~~~

 ## User Dummy Json Received From Server

 ~~~
 {
    "nutrient": {
        "carb": 0,
        "fat": 0,
        "protein": 0
    },
    "lastname": "Bhat",
    "points": 5,
    "_id": "5f6dcd8ec0aa9e21b07e5439",
    "email": "ridham.bhat@gmail.com",
    "firstname": "Ridham",
    "username": "AlgoRidham",
    "weight": 65,
    "height": 180,
    "age": 20,
    "gender": "Male",
    "college": "YMCA",
    "preference": "Veg",
    "mealsPerDay": 3,
    "goal": "Maintain",
    "bmi": 20.061728395061728,
    "createdAt": "2020-09-25T10:59:26.078Z",
    "updatedAt": "2020-09-25T10:59:26.078Z",
    "__v": 0
}
~~~
 
 ## College Dummy Json to Push To Server
~~~
{
    "collegeName": "Harvard University",
    "mealsOffered": [
            {
                "name": "Hard Boiled Eggs",
                "cost": 10,
                "weight": 50,
                "nutrition": {
                    "carb": 0,
                    "protein": 12,
                    "fat": 8
                },
                "type": "Non Veg",
                "mealTime": "Breakfast"
            },
            {
                "name": "Whole Grain Muffin",
                "cost": 20,
                "weight": 110,
                "nutrition": {
                    "carb": 0.8,
                    "protein": 0.1,
                    "fat": 0.2
                },
                "type": "Veg",
                "mealTime": "Breakfast"
            },
            {
                "name": "Bananas",
                "cost": 1,
                "weight": 120,
                "nutrition": {
                    "carb": 35,
                    "protein": 1.6,
                    "fat": 0.5
                },
                "type": "Veg",
                "mealTime": "Breakfast"
            },
            {
                "name": "Brown Rice",
                "cost": 10,
                "weight": 85,
                "nutrition": {
                    "carb": 20.2,
                    "protein": 1.9,
                    "fat": 0.6
                },
                "type": "Veg",
                "mealTime": "Lunch"
            },
            {
                "name": "Grilled Chicken",
                "cost": 20,
                "weight": 140,
                "nutrition": {
                    "carb": 0,
                    "protein": 21.2,
                    "fat": 3.3
                },
                "type": "Non Veg",
                "mealTime": "Lunch"
            },
            {
                "name": "Black Bean Soup",
                "cost": 10,
                "weight": 225,
                "nutrition": {
                    "carb": 20,
                    "protein": 6,
                    "fat": 3
                },
                "type": "Veg",
                "mealTime": "Lunch"
            },
            {
                "name": "Steamed Broccoli",
                "cost": 20,
                "weight": 110,
                "nutrition": {
                    "carb": 7.7,
                    "protein": 2.6,
                    "fat": 0.4
                },
                "type": "Veg",
                "mealTime": "Dinner"
            },
            {
                "name": "Clam Chowder",
                "cost": 20,
                "weight": 225,
                "nutrition": {
                    "carb": 16,
                    "protein": 8,
                    "fat": 3
                },
                "type": "Non Veg",
                "mealTime": "Dinner"
            },
            {
                "name": "Sweet Roasted Potatoes",
                "cost": 10,
                "weight": 110,
                "nutrition": {
                    "carb": 23.2,
                    "protein": 1.8,
                    "fat": 3.2
                },
                "type": "Veg",
                "mealTime": "Dinner"
            }
    ],
    "collegeLoc": {
        "lat": 42.3770,
        "long": -71.1167
    }
}

~~~

## College Dummy Data Received From Server

~~~
{
    "collegeLoc": {
        "lat": 42.377,
        "long": -71.1167
    },
    "_id": "5f718e772675cc21d02c8091",
    "collegeName": "Harvard University",
    "mealsOffered": [
        {
            "nutrition": {
                "carb": 0,
                "protein": 12,
                "fat": 8
            },
            "mealTime": [
                "Breakfast"
            ],
            "_id": "5f718e772675cc21d02c8092",
            "name": "Hard Boiled Eggs",
            "cost": 10,
            "weight": 50,
            "type": "Non Veg"
        },
        {
            "nutrition": {
                "carb": 0.8,
                "protein": 0.1,
                "fat": 0.2
            },
            "mealTime": [
                "Breakfast"
            ],
            "_id": "5f718e772675cc21d02c8093",
            "name": "Whole Grain Muffin",
            "cost": 20,
            "weight": 110,
            "type": "Veg"
        },
        {
            "nutrition": {
                "carb": 35,
                "protein": 1.6,
                "fat": 0.5
            },
            "mealTime": [
                "Breakfast"
            ],
            "_id": "5f718e772675cc21d02c8094",
            "name": "Bananas",
            "cost": 1,
            "weight": 120,
            "type": "Veg"
        },
        {
            "nutrition": {
                "carb": 20.2,
                "protein": 1.9,
                "fat": 0.6
            },
            "mealTime": [
                "Lunch"
            ],
            "_id": "5f718e772675cc21d02c8095",
            "name": "Brown Rice",
            "cost": 10,
            "weight": 85,
            "type": "Veg"
        },
        {
            "nutrition": {
                "carb": 0,
                "protein": 21.2,
                "fat": 3.3
            },
            "mealTime": [
                "Lunch"
            ],
            "_id": "5f718e772675cc21d02c8096",
            "name": "Grilled Chicken",
            "cost": 20,
            "weight": 140,
            "type": "Non Veg"
        },
        {
            "nutrition": {
                "carb": 20,
                "protein": 6,
                "fat": 3
            },
            "mealTime": [
                "Lunch"
            ],
            "_id": "5f718e772675cc21d02c8097",
            "name": "Black Bean Soup",
            "cost": 10,
            "weight": 225,
            "type": "Veg"
        },
        {
            "nutrition": {
                "carb": 7.7,
                "protein": 2.6,
                "fat": 0.4
            },
            "mealTime": [
                "Dinner"
            ],
            "_id": "5f718e772675cc21d02c8098",
            "name": "Steamed Broccoli",
            "cost": 20,
            "weight": 110,
            "type": "Veg"
        },
        {
            "nutrition": {
                "carb": 16,
                "protein": 8,
                "fat": 3
            },
            "mealTime": [
                "Dinner"
            ],
            "_id": "5f718e772675cc21d02c8099",
            "name": "Clam Chowder",
            "cost": 20,
            "weight": 225,
            "type": "Non Veg"
        },
        {
            "nutrition": {
                "carb": 23.2,
                "protein": 1.8,
                "fat": 3.2
            },
            "mealTime": [
                "Dinner"
            ],
            "_id": "5f718e772675cc21d02c809a",
            "name": "Sweet Roasted Potatoes",
            "cost": 10,
            "weight": 110,
            "type": "Veg"
        }
    ],
    "createdAt": "2020-09-28T07:19:19.252Z",
    "updatedAt": "2020-09-28T07:19:19.252Z",
    "__v": 0
}
~~~

## Recommendation Dummy Data Received From Server

~~~
{
    "breakfast": {
        "nutrition": {
            "carb": 0,
            "protein": 12,
            "fat": 8
        },
        "mealTime": [
            "Breakfast"
        ],
        "_id": "5f718e772675cc21d02c8092",
        "name": "Hard Boiled Eggs",
        "cost": 10,
        "weight": 50,
        "type": "Non Veg"
    },
    "lunch": {
        "nutrition": {
            "carb": 0,
            "protein": 21.2,
            "fat": 3.3
        },
        "mealTime": [
            "Lunch"
        ],
        "_id": "5f718e772675cc21d02c8096",
        "name": "Grilled Chicken",
        "cost": 20,
        "weight": 140,
        "type": "Non Veg"
    },
    "dinner": {
        "nutrition": {
            "carb": 16,
            "protein": 8,
            "fat": 3
        },
        "mealTime": [
            "Dinner"
        ],
        "_id": "5f718e772675cc21d02c8099",
        "name": "Clam Chowder",
        "cost": 20,
        "weight": 225,
        "type": "Non Veg"
    }
}
~~~