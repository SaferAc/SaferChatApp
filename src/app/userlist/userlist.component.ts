import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChatService } from "../chat.service";


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.sass']
})




export class UserlistComponent implements OnInit, OnChanges {

  constructor(public chatService:ChatService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getUsers();
  }

  ngOnInit(): void {
   
    this.getUsers();
    this.getNewUser();
  
  }

  getUsers(){
   this.chatService.getUsers().subscribe(
      res=> {
        
       this.chatService.userList= res
      
      },
      err=> console.log(err)
    )
  }

  getNewUser(){
    this.chatService.updateUsers().subscribe(
      res=> {
        this.getUsers();
      },
      err=> console.log(err)
    )
  }


  }