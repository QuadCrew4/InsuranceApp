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
      
      claimins: ClaimInsurance; 
      username : string;
      user : User;
      
      constructor(private service:InsuranceService ,private router:Router) {
        this.claimins=new ClaimInsurance();
      }

      

        ngOnInit() {
      
      }
      
      proceedNext() {
        var date=new Date();
        this.claimins.claimDate=date.toLocaleDateString();
        this.claimins.status="pending";
        localStorage.setItem("status",this.claimins.status);
        localStorage.setItem("reason",this.claimins.reason);
        localStorage.setItem("amount",this.claimins.amount);
        localStorage.setItem("claimDate",this.claimins.claimDate);
        localStorage.setItem("policyNo",this.claimins.policyNo);
        //this.service.saveClaim(this.claimins);
        this.router.navigate(['pdf']);  
      }
      
      

    }
