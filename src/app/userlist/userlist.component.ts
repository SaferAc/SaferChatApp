import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChatService } from "../chat.service";


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.sass']
})




export class UserlistComponent implements OnInit {

  constructor(public chatService:ChatService) { }

  ngOnInit(): void {
   
    this.getUsers();
  
  }

  getUsers(){
   this.chatService.getUsers().subscribe(
      res=> {
        
       this.chatService.userList= res
      
      },
      err=> console.log(err)
    )
  }


  }