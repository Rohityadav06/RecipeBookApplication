The Recipe Book Application


Aim:- This application is for creating Cooking Recipes, where users can upload new recipes, add friends and view their Recipes.


The application works in this manner
Users can post all of the cooking recipes with details
They can perform various tasks that are:-
* Login
* Search for existing people on the platform and add them as friends
* Can post their recipes
* View all of the recipes posted by the user and his friends












Technologies used:-
Angular 12, Python 3, Flask, MongoDB, HTML, CSS


About Database
[ MongoDB ]
Database Name:- recipeBook
There are Two Collections 
1. Users
2. Recipes


Users Collection 


Data = {
1. user_id:"rohit"
2. password:"1234"
3. friend_list:Array
   1. 0:"tom"
   2. 1:"Holly"
   3. 2:"harry"
   4. 3:"anku"
   5. 4:"Elizabeth"
   6. 5:"anku"


} 


Recipes 








Data = {
   1. user_id:"rohit"
   2. recipes:Array
0:Object}
1:Object
2:Object
3:Object
}




  
  
  





About Server
[Flask Python]


Folder Name = Server
File Name = server.py


Library used


* flask
* json
* pymongo
* flask_cors import CORS;
* flask import request
* re




Routes
1)Login
 
@app.route("/login",methods = ['POST'])
Which will take json  user_id  and password,
Then verify the user if the credintials, return response as per that




2)Get All Recipes


 @app.route("/getAllRecipes",methods = ['GET'] )
It will fetch all recipes from recipes collection of user and his friends,
It will arrange them in order of date of posted, then return to front end






3)Add new Recipe


@app.route("/addRecipe", methods = ['POST'])
It will add new Recipe in Recipes Collection as per user_id


4) search for friends


@app.route("/searchFriends")
I will take take string and search the user within users collection, return all users which have the string pattern


5) Add New friends
@app.route("/addNewFriend",methods = ['POST'])
It will allow user to add new friends on the search friends page. 






Front -end 
[Angular , HTML, CSS , Bootstrap]


Components