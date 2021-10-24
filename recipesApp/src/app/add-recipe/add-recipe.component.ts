
import { Component, OnInit, EventEmitter,Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddRecipeService } from '../add-recipe.service';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  @Output() public navBar = new EventEmitter<any>();
  constructor(private addRecipeService:AddRecipeService,private mainService:MainServiceService, private router:Router) { }
  createRecipe:FormGroup
  ngOnInit() {
    this.navBar.emit(true)
    if(this.mainService.user_id == undefined){
      alert("please login again")
      this.router.navigate(["/login"])
    }
    this.createRecipe = new FormGroup({
      name: new FormControl('',Validators.required),
      ingredients: new FormControl('',Validators.required),
      steps :new FormControl('',Validators.required),
      time: new FormControl('',Validators.required),
      date: new FormControl(Date.now()),
      user_id: new FormControl(this.mainService.user_id)
    })
  }

  addRecipe(){
    if(this.createRecipe.valid){
 console.log(this.createRecipe.value)
 this.addRecipeService.postRecipe(this.createRecipe.value).subscribe((res)=>{
   console.log(res)
   this.router.navigate(["/home"])
 }),
 (err)=>{
   console.log(err)
 }
    }
  }

}
