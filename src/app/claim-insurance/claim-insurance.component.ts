import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClaimModule } from '../Claim.model';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-claim-insurance',
  templateUrl: './claim-insurance.component.html',
  styleUrls: ['./claim-insurance.component.css']
})
export class ClaimInsuranceComponent implements OnInit {
  
  claim: ClaimModule; 
  
  
  constructor(private service:InsuranceService ,private router:Router) {
    this.claim=new ClaimModule();
   }

  
  ngOnInit() {
    
  }
  proceedNext() {
    this.claim.claimDate=new Date("dd/MM/yyyy");
    this.service.saveClaim(this.claim);
    //this.claim=new ClaimModule();
    this.router.navigate(['furtherdetails']);  
  }
  // async proceedNext(){
  //   await this.service.saveClaim(this.claim).then(data => this.claim = data);
    
  //   localStorage.setItem("reason",this.claim.Reason);
  //   localStorage.setItem("amount",this.claim.bankdetails.claimamount);
  //   localStorage.setItem("date","02/11/2020");
   
    
  // }
  

}
