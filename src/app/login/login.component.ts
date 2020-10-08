  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { Login } from '../login.model';
  import { LoginService } from '../services/login.service';
  import { User } from '../user.model';

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {

    role: String;
    login : Login;
    user : User;

    constructor(private router: Router, private service: LoginService) { 
      this.login = new Login();
    }

    ngOnInit() {
      localStorage.setItem("user",null);
    }
    async loggedIn(){
      await this.service.loginCheck(this.login).then(data => this.user = data);
      
      localStorage.setItem("uname",this.user.name);
      localStorage.setItem("username",this.user.username);
      localStorage.setItem("email",this.user.email);

    
      if(this.role =="Admin" && this.user.username == "admin" && this.user.password == "YWRtaW5AMTI=")
      {
        alert('Admin successfully Logged in')
        this.router.navigate(['admin']);
      }
      else if(this.user.username != "admin")
      {
        alert('User successfully Logged in')
        this.router.navigate(['profile']);
      }
    }
    goReset(){
      this.router.navigate(['resetpassword']);
    }
  }
