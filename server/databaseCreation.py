#this file is for creating the database and collections 

import pymongo
from datetime import datetime
class CreateDB:
    def __init__(self):
        mongoClient = pymongo.MongoClient("mongodb://localhost:27017/")
        db = mongoClient["recipeBook"]
        users = db["users"]
        recipes = db["recipes"]
        
        #default login details
        
        user1 = {"user_id":"rohit", "password":"1234","friend_list":["tom","Holly","harry","anku","Elizabeth"]}
        user2 = {"user_id":"tom", "password":"4332","friend_list":["rohit"]}
        user3 = {"user_id":"harry", "password":"86679234","friend_list":["rohit"]}
        user4 = {"user_id":"anku", "password":"19922","friend_list":["rohit"]}
        user5 = {"user_id":"Holly ", "password":"2323","friend_list":["rohit"]}
        user6 = {"user_id":"Carlos ", "password":"5561","friend_list":[]}
        user7 = {"user_id":"Toni", "password":"124","friend_list":[]}
        user8 = {"user_id":"Elizabeth ", "password":"123423","friend_list":["rohit"]}
        user9 = {"user_id":"Ronald ", "password":"34534","friend_list":[]}
        user10 = {"user_id":"Laverne", "password":"34567","friend_list":[]}
        user11 = {"user_id":"sahil", "password":"9876","friend_list":[]}
        users.insert_one(user1)
        users.insert_one(user2)
        users.insert_one(user3)
        users.insert_one(user4)
        users.insert_one(user5)
        users.insert_one(user6)
        users.insert_one(user7)
        users.insert_one(user8)
        users.insert_one(user9)
        users.insert_one(user10)
        users.insert_one(user11)
    
        
        #default Recipes
        
        recipes1 = {"name":"Macaroni",
                    "user_id":"rohit",
                    "ingrediant":"1 (8 ounce) box elbow macaronicup butter,1 cup all-purpose flour,1 teaspoon salt,round black pepper to taste,2 cups milk,2 cups shredded Cheddar cheese",
                       "steps": "Melt butter in a saucepan over medium heat; stir in flour, salt, and pepper until smooth, about 5 minutes. Slowly pour milk into butter-flour mixture while continuously stirring until mixture is smooth and bubbling, about 5 minutes. Add Cheddar cheese to milk mixture and stir until cheese is melted, 2 to 4 minutes.",
                   "date": int(datetime.now().timestamp()),
                   "time":"30min"
                   }
        recipes2 = {"name":"Macaroni cheese mix",
                    "user_id":"rohit",
                    "ingrediant":"1 (8 ounce) box elbow macaronicup butter,1 cup all-purpose flour,1 teaspoon salt,round black pepper to taste,2 cups milk,2 cups shredded Cheddar cheese",
                       "steps": "Melt butter in a saucepan over medium heat; stir in flour, salt, and pepper until smooth, about 5 minutes. Slowly pour milk into butter-flour mixture while continuously stirring until mixture is smooth and bubbling, about 5 minutes. Add Cheddar cheese to milk mixture and stir until cheese is melted, 2 to 4 minutes.",
                   "date": int(datetime.now().timestamp()),
                   "time":"25min"
                   }
        
        recipes3 = {"name":"Cheese Pasta",
                    "user_id":"sahil",
                    "ingrediant":"1 (8 ounce) box elbow macaronicup butter,1 cup all-purpose flour,1 teaspoon salt,round black pepper to taste,2 cups milk,2 cups shredded Cheddar cheese",
                   "steps": "Melt butter in a saucepan over medium heat stir in flour, salt, and pepper until smooth, about 5 minutes. Slowly pour milk into butter-flour mixture while continuously stirring until mixture is smooth and bubbling, about 5 minutes. Add Cheddar cheese to milk mixture and stir until cheese is melted, 2 to 4 minutes.",
                   "date": int(datetime.now().timestamp()),
                   "time":"20min"
                   }
        recipes.insert_one({ "user_id":"rohit","recipes":[recipes1,recipes2]})
        recipes.insert_one({"user_id":"sahil","recipes":[recipes3]})
        
db = CreateDB()
        
        

