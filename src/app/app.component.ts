import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ChatService } from './chat.service';
import { HostListener } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'chatApp';
  message: string;
  messages: string[] = [];

  constructor(private chatService: ChatService,public el: ElementRef,) { }

  

  ngOnInit() {
    console.log('init');
    this.chatService.listen('test-event').subscribe((data)=>{
      console.log(data);
    });

  

   // this.chatService
   // .getMessages()
   // .subscribe((data: string) => {
   //   this.messages.push(data);
   // });
    
  }

  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
      this.delete();
  }
  
  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander(event) {
      return this.delete();
  }
  
  delete() {
    this.chatService.deleteUser('onDisconnect');

  }
}