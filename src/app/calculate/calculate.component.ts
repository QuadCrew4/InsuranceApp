  import { Component, OnInit } from '@angular/core';
  import { InsuranceService } from '../services/insurance.service';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-calculate',
    templateUrl: './calculate.component.html',
    styleUrls: ['./calculate.component.css']
  })
  export class CalculateComponent implements OnInit {
      vehicleno : string;
      age: string;
      plan : string;
      insuranceAmount : number;
      premiumAmount : number;
    
      constructor(private service : InsuranceService) { }
    
      ngOnInit() {
      }
      async calculatePremium(){ 
        this.insuranceAmount= await this.service.calculate(this.vehicleno,this.plan,this.age);
        this.premiumAmount= await this.service.plan(this.plan);
      }
  }
