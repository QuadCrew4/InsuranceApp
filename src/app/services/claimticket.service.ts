import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaimPdf } from '../ClaimPdf.model';
import { Policy } from '../policy.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimticketService {

  constructor(private http:HttpClient) { }
  private baseUrl: string = "http://localhost:9090";

  findPolicies(username : string):Observable<Policy[]>{
    return this.http.get<Policy[]>(this.baseUrl+"/fetchallpolicies/"+username);
  }
}
