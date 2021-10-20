import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  @Output() public navBar = new EventEmitter<any>();
  friendList = []
  totalFriends 
  constructor(private mainService:MainServiceService) { 
    this.navBar.emit(true)
  }

  ngOnInit() {
    this.mainService.getAllFriends().subscribe(
      (res) =>{
        //console.log(res)
        if(res["message"] == "found")
        {
          this.totalFriends = res["data"][0]["friendsTotal"]
          console.log(this.totalFriends)
          this.friendList = res["data"][0]["friendList"]
          console.log(this.friendList)
        }
      },
      (err)=>{
        console.log(err)
      }


    )
  }

}
