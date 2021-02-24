import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from 'src/app/models/message';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage : ChatMessage;
  userEmail:string;
  userName:string;
  messageContent:string;
  timeStamp:Date=new Date();
  isOwnMessage:boolean;

  constructor(private chatService: ChatService) { }

  ngOnInit(chatMessage = this.chatMessage): void {

    console.log(chatMessage.message);
    this.messageContent= chatMessage.message;
    this.userName= chatMessage.userName;
    this.timeStamp= chatMessage.timeSend;
    this.checkOwner(); 
  
  
  }

  checkOwner(){
  this.chatService.checkOwner().subscribe(
    res=> {
      if((res['name']==this.userName)){
        this.isOwnMessage=true;
      }else{
        this.isOwnMessage=false;
      }
    
    },
    err=> console.log(err)
  )

  }



}
