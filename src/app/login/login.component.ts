import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  role: String;
  ngOnInit() {
  }
  loginCheck(){
    if(this.role == "Admin")
      this.router.navigate(['admin']);
    else
      this.router.navigate(['profile']);
  }
}
