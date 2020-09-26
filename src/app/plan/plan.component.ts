import { Component, OnInit } from '@angular/core';
import {PlanModel} from '../plan.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  p = new PlanModel;
  years: number[];
  plans:string[];
  plan: string;
  year:number;
  

  constructor(private router : Router) { 
    this.years = [1,2,3]
    this.plans = ['third party policy' , 'comprehensive policy']
  }

  ngOnInit(): void {
  }

  quote(){
    
    this.router.navigate(['calculate']);
  }

  pay(){
    alert("payment successful");
    this.router.navigate(['profile']);
  }
}
