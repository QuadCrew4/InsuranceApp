import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimhistoryService {
  private baseUrl: string = "http://localhost:8080/Insurance_projectGladiator/rest";
  constructor(private http : HttpClient) { }

  findUser(username : string): Observable<User>{
    return this.http.get<User>(this.baseUrl+"/fetch/"+username);
  }
}
