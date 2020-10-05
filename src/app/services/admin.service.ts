import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Policy } from '../policy.model';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl: string = "http://localhost:8080/Insurance_projectGladiator/rest";

  constructor(private router : Router, private http : HttpClient) { }
  
  getPolicies(){
    return this.http.get<Policy[]>(this.baseUrl+"/fetchallpolicies");
  }


  findByIndex(index : string): Observable<Policy>
    {
     return this.http.get<Policy>(this.baseUrl+"/fetchpolicy/"+index);
    }

  update(policy : Policy)
   {
    this.http.put(this.baseUrl + "/editpolicy",policy).subscribe(data => data = policy);
   }

  edit(index: number)
  {
    this.router.navigate(['editclaim'],{queryParams: {index: index}});
  }
}
