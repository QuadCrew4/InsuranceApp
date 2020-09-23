import { Component, OnInit } from '@angular/core';
import {PlanModel} from '../plan.model';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  p = new PlanModel;
  years: string[];
  plans:string[];
  

  constructor() { 
    this.years = ['1','2','3']
    this.plans = ['third party policy' , 'comprehensive policy']
  }

  ngOnInit(): void {
  }

  quote(){
    alert("route to calculate the price");
  }

  pay(){
    alert("payment successful, route to profile page");
  }

}
