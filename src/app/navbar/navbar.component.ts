import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  userName: string;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  send() {
    this.chatService.changeUserName(this.userName);
    this.userName = '';
  }

  handleSubmit(event){
    if(event.keycode === 13){
      this.send();
    }

  }

}
