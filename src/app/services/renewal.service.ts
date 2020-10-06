  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { User } from '../user.model';

  @Injectable({
    providedIn: 'root'
  })
  export class RenewalService {

  private baseUrl: string = "http://localhost:8080/Insurance_projectGladiator/rest";
  expDate : string;

    constructor(private http: HttpClient) { }

    findUser(username : string): Observable<User>{
      return this.http.get<User>(this.baseUrl+"/fetch/"+username);;
    }

    renew(user : User, policyNo: string){
      // this.expDate = localStorage.getItem("expDate");
      // var date = new Date(this.expDate);
      // date.setDate(date.getDate() + (365*3));
      // this.expDate = date.toLocaleDateString();
      return  this.http.put(this.baseUrl+"/renewpolicy/"+user.username+","+policyNo+","+"12-10-2025",user).subscribe(data => data = user);
  }
}
