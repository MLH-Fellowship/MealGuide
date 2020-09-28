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

Example in JavaScript

~~~
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:8000/api/user/getUser", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    //PUT DUMMY DATA HERE
}));

xhr.onload = function() {
  var data = JSON.parse(this.responseText);
  console.log(data);
}
~~~

### 2. Get User Details
~~~
EndPoint - /api/user/getUser
Request Type - POST
~~~

Example in JavaScript

~~~
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:8000/api/user/getUser", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    email: 'ridham.bhat@gmail.com'
}));

xhr.onload = function() {
  var data = JSON.parse(this.responseText);
  console.log(data);
}
~~~

### 3. Add College
~~~
EndPoint - /api/college/addCollege
Request Type - POST
~~~

Example in JavaScript

~~~
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:8000/api/college/addCollege", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    //ENTER DUMMY DATA HERE
}));

xhr.onload = function() {
  var data = JSON.parse(this.responseText);
  console.log(data);
}
~~~

### 4. Get College Details
~~~
EndPoint - /api/college/getCollege
Request Type - POST
~~~

Example in JavaScript

~~~
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:8000/api/college/getCollege", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    collegeName : 'Harvard University'
}));

xhr.onload = function() {
  var data = JSON.parse(this.responseText);
  console.log(data);
}
~~~

### 5. Get Meal Recommendations
~~~
EndPoint - /api/user/getRecommendations
Request Type - POST
~~~

Example in JavaScript

~~~
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:8000/api/user/getRecommendations", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    email : 'ridham.bhat@gmail.com'
}));

xhr.onload = function() {
  var data = JSON.parse(this.responseText);
  console.log(data);
}
~~~