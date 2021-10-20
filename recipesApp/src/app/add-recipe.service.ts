import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddRecipeService {


 


  constructor(private http:HttpClient) { }

  

 postRecipe(data){

  return this.http.post("http://127.0.0.1:5000/addRecipe",data)
 }

}
