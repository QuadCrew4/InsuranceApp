  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
import { Policy } from '../policy.model';
  import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimhistoryService {
  private baseUrl: string = "http://localhost:8080/Insurance_projectGladiator/rest";
  constructor(private http : HttpClient) { }

    findPolicies(username : string):Observable<Policy[]>{
      return this.http.get<Policy[]>(this.baseUrl+"/fetchallpolicies/"+username);
    }
  }
