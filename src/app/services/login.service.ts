import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: User[] =[];
  constructor(private router: Router) { }
  registerUser(user: User)
  {
    this.users.push(user);
  }
  loginCheck(uname: String, psw: String, role: String)
  {
    let result1 = this.users.find(x => x.username == uname);
    let result2 = this.users.find(x => x.password == psw);
    if (result1 == null || result2 == null)
      alert("Invalid Username or Password");
    else
    {
      alert("Successfully Logged In");
      if(role == "Admin")
        this.router.navigate(['admin']);
      else
        this.router.navigate(['profile']);
    }
      
  }
}
