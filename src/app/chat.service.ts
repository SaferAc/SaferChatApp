import { Injectable } from '@angular/core';
import { Socket } from "ngx-socket-io";
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { ChatMessage } from './models/message';
import {User} from './models/user'
import * as EventEmitter from 'events';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  URL_MESSAGES:string= 'http://localhost:3000/api/messages';
  URL_USERS:string= 'http://localhost:3000/api/users/';
  nombre$= new EventEmitter();
  userId$= new EventEmitter();
  chatMessage: any;
  newUser:any;
  userList:User[];



  constructor(private socket:Socket,public http: HttpClient) { 
  }

  
  checkOwner(){
    return this.http.get(this.URL_USERS+this.userId$);

  }


  


listen(eventName:string) {
  return new Observable ((subscriber)=>{
    this.socket.on(eventName,(data)=>{
      subscriber.next(data);
    })
  });
}

sendMessage(eventName:string ,data:any ){
    const timestamp= this.getTimeStamp();
    this.socket.emit(eventName,{
      message: data,
      timeSend: timestamp,
      userName: this.nombre$,
    });
  
}

//emit(eventName:string ,data:any ){
  //this.socket.emit(eventName,data);
//}


getMessages() {

  return this.http.get<ChatMessage[]>(this.URL_MESSAGES);

}


getUsers() {

  return this.http.get<User[]>(this.URL_USERS);

}


createUser(){

  return this.http.post(this.URL_USERS,null).subscribe(
    res=> { 
      this.nombre$ = res['name']
      this.userId$ = res['_id']
    },
    err=> console.log(err)
  )
}

changeUserName(name:string){

  return this.http.put(this.URL_USERS+this.userId$,name).subscribe(
    res=> { 
      this.nombre$= res['name']
      console.log(res)
      
    },
    err=> console.log(err)
  )
}




getTimeStamp() {
  const now = new Date();
  const date = now.getUTCFullYear() + '/' +
               (now.getUTCMonth() + 1) + '/' +
               now.getUTCDate();
  const time = now.getUTCHours() + ':' +
               now.getUTCMinutes() + ':' +
               now.getUTCSeconds();

  return (date + ' ' + time);
}



 public getSocketMessages(){
        return new Observable ((subscriber) => {
            this.socket.on('new-message', (message) => {
                subscriber.next(message);
            })
        });
    }


}