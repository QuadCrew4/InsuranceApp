  import { Component, OnInit } from '@angular/core';
  import { InsuranceService } from '../services/insurance.service';
  import { Router } from '@angular/router';
import { Vehicle } from '../vehicle.model';

  @Component({
    selector: 'app-calculate',
    templateUrl: './calculate.component.html',
    styleUrls: ['./calculate.component.css']
  })
  export class CalculateComponent implements OnInit {
      vehicleno : string;
      age: number;
      plan : string;
      term: number;
      insuranceAmount : number;
      premiumAmount : number;
      vehicle : Vehicle;
    
      constructor(private service : InsuranceService, private router: Router) { }
    
      ngOnInit() {
      }
      calculatePremium(){ 
        this.service.find(this.vehicleno).subscribe(data => this.vehicle = data);
        this.insuranceAmount= this.service.calculate(this.vehicleno,this.plan,this.age,this.vehicle.price);
        this.premiumAmount= this.service.plan(this.plan,this.term);
      }
      goHome(){
        this.router.navigate(['home']);
      }
      goRegister(){
        this.router.navigate(['register']);
      }
  }
