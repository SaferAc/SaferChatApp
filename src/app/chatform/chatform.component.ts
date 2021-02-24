import { Component, OnInit } from '@angular/core';
import { ChatService } from "../chat.service";

@Component({
  selector: 'app-chatform',
  templateUrl: './chatform.component.html',
  styleUrls: ['./chatform.component.sass']
})
export class ChatformComponent implements OnInit {
  message: string;
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  send() {
    this.chatService.sendMessage('new-message',this.message);
    this.message = '';
  }

  handleSubmit(event){
    if(event.keycode === 13){
      this.send();
    }

  }

}
