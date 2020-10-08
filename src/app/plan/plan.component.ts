import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Policy } from '../policy.model';
import { BuyerService } from '../services/buyer.service';
import { PaymentService } from '../services/payment.service';
import { User } from '../user.model';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  p:Policy;
  years: number[];
  plans:string[];
  plan: string;
  year:number;
  age: string;
  ag:string;
  username : string;
  user: User;
  insuranceAmount : number;
  Amount : number;
  monthlyAmount : number;
  vehicleno:string;
  

  constructor(private router : Router, private service:  BuyerService, private payserv: PaymentService) { 
    this.p = new Policy;
    this.years = [1,2,3]
    this.plans = ['Third party' , 'Comprehensive']
  }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.service.findUser(this.username).subscribe(data => this.user = data);
  }

  quote(){
    this.vehicleno = localStorage.getItem("regNo");
    this.insuranceAmount=  this.service.calculateIDV(this.vehicleno,this.p,this.age);
    this.Amount= this.service.planTerm(this.p);
    this.monthlyAmount = this.service.installment(this.p);
  }

  pay(){
    var date=new Date();
    date.setDate(date.getDate() + (365*this.p.term));
    this.p.expDate = date.toLocaleDateString();
    localStorage.setItem("expDate",this.p.expDate);
    this.payserv.setAmount(this.monthlyAmount);
    this.payserv.setPolicy(this.p, this.user, this.monthlyAmount);
    this.router.navigate(['payment']);
    // this.service.addUserPolicy(this.p,this.user,this.monthlyAmount);
  }
}
