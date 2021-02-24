
import { Routes } from '@angular/router';
import { ChatroomComponent } from './chatroom/chatroom.component';



export const AppRoutes: Routes = [
  { path: 'chat', component: ChatroomComponent },
  { path: '', redirectTo: '/chat', pathMatch:'full' }
];


