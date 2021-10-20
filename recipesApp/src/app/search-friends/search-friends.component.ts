import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-search-friends',
  templateUrl: './search-friends.component.html',
  styleUrls: ['./search-friends.component.css']
})
export class SearchFriendsComponent implements OnInit {
  @Output() public navBar = new EventEmitter<any>();
  value = ""
  arr = []
  constructor(private mainService:MainServiceService) { 
    this.navBar.emit(true)
  }

  ngOnInit() {

  }
   onSearch(){
     console.log(this.value)
    this.mainService.searchFriends(this.value).subscribe(

      (res)=>{
        this.arr = res["data"]
        console.log(res)
      },
      (err)=>{
        console.log(err)
      }
    )
   }

   addFriend(i){
     console.log(i)
    let  data = {
       user_id:this.mainService.user_id,
       friendNeedToAdd: this.arr[i]["user_id"]

     }
     debugger
     this.mainService.addNewFriend(data).subscribe(
       (res)=>{
         if(res["message"] == "updated"){
           alert("New Friend Added")
            this.arr.splice(i,1)
         }
         else{
          alert("unable to add new friend ")
         }
       },
       (err)=>{
         console.log(err)
       }
     )
       

   }
}
