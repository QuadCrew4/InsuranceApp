  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { User } from '../user.model';

  @Injectable({
    providedIn: 'root'
  })
  export class RenewalService {

  private baseUrl: string = "http://localhost:9090";
  expDate : string;

    constructor(private http: HttpClient) { }

    findUser(username : string): Observable<User>{
      return this.http.get<User>(this.baseUrl+"/fetch/"+username);;
    }

    renew(user : User, policyNo: string){
      var date = new Date(this.expDate);
      date.setDate(date.getDate() + (365*5));
      this.expDate = date.toLocaleDateString();
      return  this.http.put(this.baseUrl+"/renewpolicy/"+user.username+","+policyNo,user).subscribe(data => data = user);
  }
}
