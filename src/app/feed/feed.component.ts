import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChatService } from "../chat.service";


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit,OnChanges {

  
  constructor(public chatService:ChatService) { }
  ngOnChanges(changes: SimpleChanges): void {
   this.getMessages();
  }

  ngOnInit(): void {
   
    this.getMessages();
    this.getSocket();
  
  }

  getMessages(){
   this.chatService.getMessages().subscribe(
      res=> {
        
        this.chatService.chatMessage = res
      
      },
      err=> console.log(err)
    )
  }




  getSocket(){
    this.chatService.getSocketMessages().subscribe(
       res=> {
         this.getMessages();
       },
       err=> console.log(err)
     )
   }



}
