import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl: string = "http://localhost:8080/insurance-spring-rest/rest";

  constructor(private router : Router, private http : HttpClient) { }

  findByIndex(index : string): Observable<User>
    {
     return this.http.get<User>(this.baseUrl+"/fetch/"+index);
    }

  update(user : User)
   {
    this.http.put(this.baseUrl + "/edituser",user).subscribe(data => data = user);
   }

  edit(index: number)
  {
    this.router.navigate(['editclaim'],{queryParams: {index: index}});
  }
}
