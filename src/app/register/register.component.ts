import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User;
  constructor(private service: LoginService, private router: Router) { }

  ngOnInit() {
  }
  registerUser(){
    this.service.registerUser(this.user);
    alert("User Successfully Registered");
    this.router.navigate(['login']);
  }
}
