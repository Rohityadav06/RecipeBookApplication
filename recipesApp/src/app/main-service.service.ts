import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  user_id 
  constructor(private http:HttpClient,private router:Router) { }

  doLogin(data){
    this.user_id = data["user_id"]
    console.log(this.user_id)
   return this.http.post("http://127.0.0.1:5000/login",data)
  }

  getAllRecipes(){
    if(this.user_id == undefined){
      alert("kindly login again")
      this.router.navigate(["/"])

    }
    else{
     return this.http.get("http://127.0.0.1:5000/getAllRecipes?user_id="+this.user_id)
    }

  }

  getAllFriends(){
    if(this.user_id == undefined){
      alert("kindly login again")
      this.router.navigate(["/"])

    }else{
    return this.http.get("http://127.0.0.1:5000/getAllUser?user_id="+this.user_id)}
  }

  searchFriends(data){
    if(this.user_id == undefined){
      alert("kindly login again")
      this.router.navigate(["/"])

    }else{
    return this.http.get("http://127.0.0.1:5000/searchFriends?user_id="+data)
    }
  }

  addNewFriend(data){
    if(this.user_id == undefined){
      alert("kindly login again")
      this.router.navigate(["/"])

    }else{
    return this.http.post("http://127.0.0.1:5000/addNewFriend",data)
    }
  }
}
