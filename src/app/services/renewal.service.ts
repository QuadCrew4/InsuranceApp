  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { User } from '../user.model';

  @Injectable({
    providedIn: 'root'
  })
  export class RenewalService {

  private baseUrl: string = "http://localhost:8080/Insurance_projectGladiator/rest";

    constructor(private http: HttpClient) { }

    findUser(username : string): Observable<User>{
      return this.http.get<User>(this.baseUrl+"/fetch/"+username);;
    }

    renew(user : User, policyNo: string){

    // if(user.policies[0].policyNo == policyNo)
    // {
    //   user.policies[0].expDate = '05-05-2050';
    // }
    // else if(user.policies[1].policyNo == policyNo){
    //   user.policies[1].expDate = '19-09-2027';
    // }
    
    // var uname = localStorage.getItem("username");
    // var expDate = '19-09-2027';
    // const params = new HttpParams().append('username',uname).append('policyNo',policyNo).append('expDate',expDate);
    return  this.http.put(this.baseUrl+"/renewpolicy/"+user.username+","+policyNo+","+"12-10-2025",user).subscribe(data => data = user);
  }
}
