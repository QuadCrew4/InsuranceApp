import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../vehicle.model';
import { Observable } from 'rxjs';
import { Policy } from '../policy.model';
import { User } from '../user.model';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  username: string;
  regNo: string;
  vehicle = new Vehicle;
  insurancePrice : number;
  Amount : number;
  vage : number;
  monthlyAmount: number;

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

  calculateIDV(regNo : string, p : Policy, age:string) : number{  
    if(age==="6 months")
      this.vage=0.5;
    else if(age=="one year")
      this.vage=1;
    else if(age=="two years")
      this.vage=2;
    else if(age == "three years")
      this.vage=3;
    else if (age == "more than 5")
      this.vage=5; 
    this.find(regNo).subscribe(data => this.vehicle = data);
    this.insurancePrice = (this.vehicle.price) - ((this.vehicle.price)* this.vage * 0.05);
    return this.insurancePrice;
  }

  planTerm(p : Policy) : number{
    if(p.type === 'comprehensive')
      this.Amount = this.insurancePrice + (this.insurancePrice*0.15*p.term);
    else
      this.Amount = this.insurancePrice + (this.insurancePrice*0.12*p.term);
    // if(p.type === 'comprehensive' && p.term == 2)
    //   this.Amount = this.insurancePrice * 0.15 * 2;
    // if(p.type === 'comprehensive' && p.term == 3)
    //   this.Amount = this.insurancePrice * 0.15 * 3;

    // if(p.type ==='third party' && p.term == 1)
    //   this.Amount = this.insurancePrice * 0.12 * 1;
    // if(p.type ==='third party' && p.term == 2)
    //   this.Amount = this.insurancePrice * 0.12 * 2;
    // if(p.type ==='third party' && p.term == 3)
    //   this.Amount = this.insurancePrice * 0.12 * 3;

    return this.Amount;
  }

  installment(p : Policy) : number{
    this.monthlyAmount = this.Amount/ (p.term *12);
    return this.monthlyAmount;
  }


}
