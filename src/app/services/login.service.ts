import { Injectable } from '@angular/core';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: User[] =[];
  constructor() { }
  registerUser(user: User)
  {
    this.users.push(user);
  }
  loginCheck(uname: String, psw: String)
  {
    let result1 = this.users.find(x => x.username == uname);
    let result2 = this.users.find(x => x.password == psw);
    if (result1 == null || result2 == null)
      alert("Invalid Username or Password");
    else
      alert("Successfully Logged In");
  }
}
