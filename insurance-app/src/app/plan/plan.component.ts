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
  y:number;

  constructor() { 
    this.years = ['1','2','3']
  }

  ngOnInit(): void {
  }

  thirdParty(){
    alert("you opt for third party policy plan for ");
  }
  comprehensive(){
    alert("you opt for comprehensive policy plan");
  }

}
