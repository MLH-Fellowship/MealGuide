# Meal Guide - Backend

To battle obesity in students at various university, MealGuide will remove the need to research, plan and design your diets so that the students don’t really have to spend time, thinking for starting their fitness journey. Our application uses nutritional science to develop custom meals according to the menu at your university dinning halls that will help you reach your fitness goals.

---

## How to run backend:

### Step 1: 
Install Node.js and MongoDB on your system.

### Step 2:
Run command:
```
npm install
```
This should import dependancies like express, nodemon present in the package.json file.

### Step 3:
Run command:
```
npm start
```
This will launch the backend on your local system on an address like "http://localhost:8000/.."

----

## API points ready to use:

### 1. Add User
~~~
EndPoint - /api/user/addUser
Request Type - POST
~~~

Json to push (example)

~~~
{
    "email": "ri.bh@gmail.com", - Required  -- Primary
    "firstname": "Ridham",      - Required
    "lastname": "Bhat",         - Required
    "username": "AlgoRidham",   
    "points": 5,                - Required
    "weight": 65,               - Required
    "height": 180,              - Required
    "age": 20,                  - Required
    "gender": "Male",           - Required
    "college": "YMCA",          - Required
    "preference": "Veg",        - Required
    "mealsPerDay": 3,           - Required
    "goal": "Maintain"          - Required
}
~~~

### 2. Get User Details
~~~
EndPoint - /api/user/getUser
Request Type - POST
~~~

Json to push (example)

~~~
{
    "email": "ri.bh@gmail.com", - Required
}
~~~

### 3. Add College
~~~
EndPoint - /api/college/addCollege
Request Type - POST
~~~

Json to push (example)

~~~
{
    "collegeName": "YMCA, Faridabad",     - Required -- Primary
    "mealsOffered": [
        
            { 
                "name": "Rajma Rice",
                "cost": 100,
                "weight": 200,
                "nutrition": {
                    "carb": 50,
                    "protein": 20,
                    "fat": 10
                },
                "type": "Veg"
            }
        ,
        {
                "name": "Chole Bhature",
                "cost": 90,
                "weight": 150,
                "nutrition": {
                    "carb": 60,
                    "protein": 20,
                    "fat": 30
                },
                "type": "Veg"
        }
    ],
    "collegeLoc": {                         - Required    
        "lat": 25.311,
        "long": 26.112
    }
}

~~~

### 4. Get College Details
~~~
EndPoint - /api/college/getCollege
Request Type - POST
~~~

Json to push (example)

~~~
{
    "collegeName": "YMCA, Faridabad",     - Required
}
~~~