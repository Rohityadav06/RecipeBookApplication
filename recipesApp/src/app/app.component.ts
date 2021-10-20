import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipesApp';

  navbarDisplay = false
  constructor(private router:Router){
   
  }
  Logout(){
    this.router.navigate(["/"])
  }
  getnavbarDisplay(event){
    this.navbarDisplay = event.navBar
 
  }
  componentRemoved(event){
    this.navbarDisplay = false
  }

}
