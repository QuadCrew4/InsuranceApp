import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { BankDetailsModule } from '../BankDetails.model';
import { ClaimModule } from '../Claim.model';
import { CustomValidationService } from '../services/custom-validation.service';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-furtherdetails',
  templateUrl: './furtherdetails.component.html',
  styleUrls: ['./furtherdetails.component.css']
})
export class FurtherdetailsComponent implements OnInit {
  bank=new ClaimModule;
  bankDetailsForm:FormGroup;
  
  


  constructor(private service:InsuranceService ,private router:Router, public formBuilder: FormBuilder,private customValidator:CustomValidationService){
   
    this.bankDetailsForm = this.formBuilder.group({
      phoneno:["",[Validators.required,Validators.pattern("[0-9]{10}")]],
      IFSCcode: ["",[Validators.required,Validators.pattern("[A-Z]{4}[0-9]{7,}")]],
      holdername:["", [Validators.required,Validators.pattern("[A-Za-z]{3,}")]],
      accountno: ["",[Validators.required,Validators.pattern("[0-9]{8,}")]],
      confirmaccountno: ["",[Validators.required]]
    }, { 
      validator: this.customValidator.accountnoMatchValidator("accountno","confirmaccountno")
    });
  }


  ngOnInit() {
   
}
  currentDate=new Date();
  submitClaim()
  {
    this.service.saveBank(this.bank);
   // this.bank=new BankDetailsModule();
    alert(`
           Claim No:
           Date: 
           Policy No:
           Amount: 
          
           Claimed Succesfully
            `);
     this.router.navigate(['claimhistory']);
    

  }

  

}
