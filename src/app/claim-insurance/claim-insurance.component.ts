import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-claim-insurance',
  templateUrl: './claim-insurance.component.html',
  styleUrls: ['./claim-insurance.component.css']
})
export class ClaimInsuranceComponent implements OnInit {
  

  
  
  constructor(private service:InsuranceService ,private router:Router) {
    
   }

  
  ngOnInit() {
    
  }
  proceedNext() {
 
    // this.service.saveClaim(this.claim);
    // this.claim=new ClaimModule();
    this.router.navigate(['pdf']);  
  }
  

}
