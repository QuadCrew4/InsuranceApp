  import { HttpClient, HttpParams } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Router } from '@angular/router';
  import { Login } from '../login.model';
  import { User } from '../user.model';

  @Injectable({
    providedIn: 'root'
  })
  export class LoginService {
    private baseUrl: string = "http://localhost:8080/Insurance_projectGladiator/rest";
    users: User;
    constructor(private router: Router, private http: HttpClient) { }

    getUsers()
    {
      return this.http.get<User[]>(this.baseUrl+"/list");
    }

    registerUser(user: User)
    {
      this.http.post(this.baseUrl+"/register",user).subscribe(data => data = user);
    }
    
    loginCheck(login: Login): Promise<User>
    {
      const params = new HttpParams().append('username',login.username).append('password',login.password);
      let result = this.http.get<User>(this.baseUrl+"/login",{params : params}).toPromise();
      return result;

    }
  }
