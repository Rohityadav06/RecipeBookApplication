import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

 
export class HomeComponent implements OnInit {
  @Output() public navBar = new EventEmitter<any>();

  recipeDataArray = []
  constructor(private mainService:MainServiceService) { 
  
    
  
  }

  ngOnInit() {
    this.navBar.emit(true)
    this.mainService.getAllRecipes().subscribe(
(res)=>{
  console.log(res)
  if(res["message"]="found"){
  this.recipeDataArray = res["data"]
  console.log(this.recipeDataArray)
  }

},
(err)=>{
  console.log(err)
}
  )
  }

}
