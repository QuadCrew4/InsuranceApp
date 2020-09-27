import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as profile from '../../assets/profile.json';
import { profileModel } from "../profile.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  users : any = (profile as any).default;

  constructor(private router : Router) { }

  searchN(username : string) : profileModel {
    let result = this.users.find(x => x.username == username);
    if(result == null)
      return null;
    else
      return result;
  }
}
