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

Json to push

~~~
{
    "email": "ri.bh@gmail.com", - Required
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

Json to push

~~~
{
    "email": "ri.bh@gmail.com", - Required
}
~~~