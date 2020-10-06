    import { HttpClient } from '@angular/common/http';
    import { Component, OnInit } from '@angular/core';
    import { Router } from '@angular/router';
    import { Observable } from 'rxjs';
    import {  ClaimInsurance } from '../claim.model';


    import { InsuranceService } from '../services/insurance.service';
    import { User } from '../user.model';

    @Component({
      selector: 'app-claim-insurance',
      templateUrl: './claim-insurance.component.html',
      styleUrls: ['./claim-insurance.component.css']
    })
    export class ClaimInsuranceComponent implements OnInit {
      
      status: string;
      reason: string;
      amount: string;
      claimDate: string;
      policyNo: string; 
      username : string;
      user : User;
      
      constructor(private service:InsuranceService ,private router:Router) {
      }

      

        ngOnInit() {
      
      }
      
      proceedNext() {
        var date=new Date();
        this.claimDate=date.toLocaleDateString();
        this.status="pending";
        localStorage.setItem("status",this.status);
        localStorage.setItem("reason",this.reason);
        localStorage.setItem("amount",this.amount);
        localStorage.setItem("claimDate",this.claimDate);
        localStorage.setItem("policyNo",this.policyNo);
        this.router.navigate(['address']);  
      }
      
      

    
    }
