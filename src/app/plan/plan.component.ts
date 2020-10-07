import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Policy } from '../policy.model';
import { BuyerService } from '../services/buyer.service';
import { User } from '../user.model';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  p = new Policy;
  years: number[];
  plans:string[];
  plan: string;
  year:number;
  username : string;
  user: User;
  insuranceAmount : number;
  Amount : number;
  vehicleno:string;
  

  constructor(private router : Router, private service:  BuyerService) { 
    this.years = [1,2,3]
    this.plans = ['third party policy' , 'comprehensive policy']
  }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.service.findUser(this.username).subscribe(data => this.user = data);
  }

  quote(){
    this.vehicleno = localStorage.getItem("regNo");
    this.insuranceAmount=  this.service.calculateIDV(this.vehicleno,this.p);
    this.Amount= this.service.planTerm(this.p);
    //this.router.navigate(['calculate']);
  }

  pay(){
    var date=new Date();
    date.setDate(date.getDate() + (365*this.p.term));
    this.p.expDate = date.toLocaleDateString();
    localStorage.setItem("expDate",this.p.expDate);
    this.service.addUserPolicy(this.p,this.user);
    alert("Congratulations, your payment is successful.");
    this.router.navigate(['profile']);
  }
}
