#this file is for server creation and running the server as per host specified in the code.
import flask
import json
import pymongo
from flask_cors import CORS;
from flask import request
import re
class Server:
    def createServer(self):
        
            
        try: 
            app = flask.Flask(__name__)
            CORS(app)
            mongoClient = pymongo.MongoClient("mongodb://localhost:27017/")
            db = mongoClient["recipeBook"]
            users = db["users"]
            recipes = db["recipes"]
            
            @app.route("/login",methods = ['POST'])
            def Login():
                loginData = json.loads(request.data)
                #print(loginData)
                user_id = loginData["user_id"]
                password = loginData["password"]
                #print(loginData)
                user = users.find_one({"user_id":user_id , "password":password})
                if(user):
                    return {"data":"valid"}
                else:
                    return {"data":"invalid"}
                
            
            @app.route("/getAllUser")
            def getAllFriends():
                user_id = request.args.get("user_id")
                usersArray = []
                user = users.find_one({"user_id": user_id })
                if(user):
                    usersArray.append({
                            "friendList": user["friend_list"],
                            "friendsTotal":len(user["friend_list"])
                    })
                 
                print(usersArray)
                return{"message":"found", "data":usersArray} 
                
            
            @app.route("/addNewFriend",methods = ['POST'])
            def addNewFriend():
                data = json.loads(request.data)
                print(data)
                user_id = data["user_id"]
                friend_new = data["friendNeedToAdd"]
                user = users.update_one({"user_id":user_id},{
                                       "$push":{"friend_list":friend_new}
                    
                })
                if(user == None):
                    return {"message":"unable to add friend"}
                friend = users.update_one({"user_id":friend_new},
                                          
                                       {"$push":{"friend_list":user_id}})
                if(friend == None):
                    return {"message":"unable to add friend"}
                return {"message":"updated"}
                
            @app.route("/searchFriends")
            def searchFriends():
                searchQuery = request.args.get("searchQuery")
                user_id = request.args.get("user_id")
                searchedArray = []
                print(searchQuery)
                user_id = user_id.lower()
                searchQuery = searchQuery.lower()
                rgx = re.compile('.*'+searchQuery+'.*', re.IGNORECASE)
                user = users.find({"user_id": rgx })
                userFriends = []
               
                userDataFromDB = users.find_one({"user_id":user_id})
                friendsArrayFromDB = userDataFromDB["friend_list"]

                print(friendsArrayFromDB)
                if(user != []):
                    for i in user:
                        if(i["user_id"] not in friendsArrayFromDB):
                            searchedArray.append({"user_id":i["user_id"]})
                    print(searchedArray)
                    if(len(searchedArray) != 0):
                        return {"message":"found", "data":searchedArray}
                
                return {"message":"not found"}
            
            
            
            
            @app.route("/getAllRecipes",methods = ['GET'] )
            def fetchAllRecipes():
                user_id = request.args.get("user_id")
                print(user_id)
                user = users.find_one({"user_id":user_id})
                recipe = recipes.find_one({"user_id":user_id})
                if(recipe == None):
                    return {"message":"no recipes found"}
                allRecipes = []
                if(user):
                    userRecipes = recipes.find_one({"user_id": user_id })
                    userRecipesArray = userRecipes["recipes"]
                    if(userRecipesArray != []):
                        for i in userRecipesArray:
                            allRecipes.append(i) 
                    
                    print(allRecipes)
                    friendList = user["friend_list"]
                    print(friendList)
                    if(friendList != []):
                        for i in friendList:
                            friendRecipe = recipes.find_one({"user_id": i })
                            if(friendRecipe == None):
                                continue
                            else:
                                friendRecipesArray = friendRecipe["recipes"]
                            if(friendRecipesArray != []):
                                for j in friendRecipesArray:
                                    allRecipes.append(j)
                            print(allRecipes)
                        if(len(allRecipes)>1):
                            allRecipes.sort(key = lambda x:x["date"],reverse=True)
                            
                #products.sort(key=lambda x: x["brand"])
                    
                      
                    else:
                        print("no friends found")
                    
                    return {"message":"found", "data":allRecipes} 
                 
                return {"message":"no recipes found"}
            
            
            
            @app.route("/addRecipe", methods = ['POST'])
            def addNewRecipe():
                data = json.loads(request.data)
                print(data["user_id"])
                user = recipes.find_one({"user_id":data["user_id"]})
                if(user):
                    userRecipes = recipes.update_one({"user_id": data["user_id"]},{
                        "$push":{
                            "recipes": data
                        }
                    })
                    return {"res":"pushed a new instances of array in recipes table"}
                else:
                    recipes.insert({"user_id": data["user_id"],
                                   "recipes":[data]
                                   })
                    return {"res":"added a new record in recipes table"}
            
            if __name__ == "__main__":
                app.run()
            
        except Exception as e:
            print(e)



serverObject = Server()



serverObject.createServer()


