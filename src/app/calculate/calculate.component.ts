import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../services/insurance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  public insuranceAmount;
  public vehicleModel;
  public policyType;
  public premiumAmount=1200;
   vehicleno:string;
   plan:string;
   age:string;
 
  constructor(private service:InsuranceService, private router : Router) { }

  ngOnInit() {
    
    
     
  }
  CalculatePremium()
  { this.service.Age(this.age);
    this.insuranceAmount=this.service.Calculate(this.vehicleno);
    this.premiumAmount=this.service.plan(this.plan);
  }
 
  pay(){
    alert("payment successful");
    this.router.navigate(['profile']);
  }
  
  

}
