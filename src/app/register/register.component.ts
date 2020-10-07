import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { MailService } from '../services/mail.service';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User;
  constructor(private service: LoginService, private router: Router, private mail: MailService) { }

  ngOnInit() {
  }
  registerUser(){
    this.service.registerUser(this.user);
    // this.mail.registerMail(this.user.email,this.user.username);
    alert(`
            User Successfully Registered 
            Welcome Mail Sent to email`
            ); 
    this.router.navigate(['login']);
  }
}
