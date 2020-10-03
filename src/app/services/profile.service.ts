import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as profile from '../../assets/profile.json';
import { Policy } from '../policy.model';
import { profileModel } from "../profile.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl: string = "http://localhost:8080/insurance-spring-rest/rest";


  constructor(private http: HttpClient) { }

  search(uname : string){
    return this.http.get<Policy[]>(this.baseUrl+"/fetchallpolicies/"+uname);
  }
}
