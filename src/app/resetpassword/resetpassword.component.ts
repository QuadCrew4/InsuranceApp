import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../user.model';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  username: string;
  pwd: string;
  user = new User;
  email : string;
  constructor(private router: Router, private service: LoginService) { }

  ngOnInit() {
  }
  resetPass(){
    this.service.findUser(this.username).subscribe(data => this.user = data);
    this.service.reset(this.username,this.pwd, this.user, this.email);
    // alert("Password successfully reset");
    this.router.navigate(['login']);
  }
}
