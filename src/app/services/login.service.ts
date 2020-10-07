  import { HttpClient, HttpParams } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Router } from '@angular/router';
import { Observable } from 'rxjs';
  import { Login } from '../login.model';
  import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string = "http://localhost:9090";
  users: User;
  constructor(private router: Router, private http: HttpClient) { }

    getUsers()
    {
      return this.http.get<User[]>(this.baseUrl+"/list");
    }

    findUser(username : string): Observable<User>{
      return this.http.get<User>(this.baseUrl+"/fetch/"+username);;
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
    reset(uname : string, password: string, user : User){
      return this.http.put(this.baseUrl+"/resetpassword/"+uname+","+password,null).subscribe(data => data = user);
    }
  }
