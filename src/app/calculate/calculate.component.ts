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
      term: number;
      insuranceAmount : number;
      premiumAmount : number;
    
      constructor(private service : InsuranceService, private router: Router) { }
    
      ngOnInit() {
      }
      calculatePremium(){ 
        this.insuranceAmount= this.service.calculate(this.vehicleno,this.plan,this.age);
        this.premiumAmount= this.service.plan(this.plan,this.term);
      }
      goHome(){
        this.router.navigate(['home']);
      }
  }
