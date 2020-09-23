import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  role: String;
  uname: String;
  psw: String;
  constructor(private router: Router, private service: LoginService) { }

  ngOnInit() {
  }

  loginCheck(){
    this.service.loginCheck(this.uname,this.psw,this.role);
  }
}
