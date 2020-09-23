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
  public premiumAmount;
  constructor(private service:InsuranceService, private router : Router) { }

  ngOnInit() {
     this.insuranceAmount=this.service.Calculate();
     this.vehicleModel=this.service.vehicleModel();
     this.policyType=this.service.policyType();
     this.premiumAmount=this.service.plan();
  }

  pay(){
    alert("payment successful");
    this.router.navigate(['profile']);
  }
  
  

}
