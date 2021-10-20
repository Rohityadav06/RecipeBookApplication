import { Component, OnInit, Output } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 @Output() navBar = false
 
  CandidateLogIn:FormGroup
  constructor(private mainService:MainServiceService,
    private router:Router) { }

  ngOnInit() {

    this.CandidateLogIn = new FormGroup({
      user_id: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    
    })
  }

  LogIn(){
    if(this.CandidateLogIn.valid){
      console.log(this.CandidateLogIn.value)
    this.mainService.doLogin(this.CandidateLogIn.value).subscribe((res)=>{
    if(res["data"] == "valid")  { 
      this.mainService.user_id = this.CandidateLogIn.controls["user_id"].value
      this.router.navigate(["/home"])
      console.log(this.mainService.user_id)}
    else{
      alert("Invalid User")
    }
    },
    (err)=>{
      alert("Server Disconnected")
    })
    }
    else{
      alert("kindly fill the Login Details")
    }
  }
}
