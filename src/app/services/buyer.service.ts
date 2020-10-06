import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../vehicle.model';
import { Observable } from 'rxjs';
import { Policy } from '../policy.model';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  username: string;
  regNo: string;
  vehicle = new Vehicle;
  insurancePrice : number;
  Amount : number;

  private baseUrl: string = "http://localhost:8080/Insurance_projectGladiator/rest";


  constructor(private router : Router,private http: HttpClient) { }

  search(regNo : string) : Observable<Vehicle> {
    return this.http.get<Vehicle>(this.baseUrl+"/fetchvehicle/"+regNo);
  }

  findUser(username : string): Observable<User>{
    return this.http.get<User>(this.baseUrl+"/fetch/"+username);;
  }

  addUserPolicy(p : Policy, user : User){
    this.username = localStorage.getItem("username");
    this.regNo =  localStorage.getItem("regNo");
    this.http.post(this.baseUrl+"/addpolicy/"+this.username+","+this.regNo,p).subscribe(data => data = user);
  }

  find(regNo: string): Observable<Vehicle>{
    return this.http.get<Vehicle>(this.baseUrl+"/fetchvehicle/"+regNo);
  }

  calculateIDV(regNo : string, p : Policy) : number{   
    this.find(regNo).subscribe(data => this.vehicle = data);
    this.insurancePrice = (this.vehicle.price) - ((this.vehicle.price) * 0.05);
    return this.insurancePrice;
  }

  planTerm(p : Policy) : number{
    if(p.type=='Comprehensive')
      this.Amount=this.insurancePrice*0.15;
    else
      this.Amount=this.insurancePrice*0.12;
    
    if(p.term==1)
      this.Amount = this.insurancePrice*1;
    if(p.term==2)
      this.Amount = this.insurancePrice*2;
    if(p.term==3)
      this.Amount = this.insurancePrice*3;

    return this.Amount;
  }

}
