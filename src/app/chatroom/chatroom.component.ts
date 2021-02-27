import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from "../chat.service";

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.sass']
})
export class ChatroomComponent implements OnInit {

  constructor(private chatService:ChatService) { }
 

  ngOnInit(): void {
    this.chatService.createUser();
  }

}