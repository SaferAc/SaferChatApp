import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AppComponent } from './app.component';
import { ChatformComponent } from './chatform/chatform.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserlistComponent } from './userlist/userlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { Router, RouterModule } from "@angular/router";
import { AppRoutes } from './app-routing.module';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ChatformComponent,
    ChatroomComponent,
    FeedComponent,
    MessageComponent,
    UserItemComponent,
    UserlistComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
