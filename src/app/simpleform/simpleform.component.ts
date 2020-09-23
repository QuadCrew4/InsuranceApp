import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  user = new UserModel;

  constructor() { }

  ngOnInit() {
  }
  renewPolicy() {
    
  }

}
