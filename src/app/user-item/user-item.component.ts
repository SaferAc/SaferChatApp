import { Component, Input, OnInit } from '@angular/core';
import {User} from '../models/user'

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.sass']
})
export class UserItemComponent implements OnInit {
 
  @Input() User : User;

  constructor() { }
 
  ngOnInit(): void {

    

  }

}
