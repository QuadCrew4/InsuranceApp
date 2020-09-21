import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { BankDetailsModule } from '../BankDetails.model';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-furtherdetails',
  templateUrl: './furtherdetails.component.html',
  styleUrls: ['./furtherdetails.component.css']
})
export class FurtherdetailsComponent implements OnInit {
  bank=new BankDetailsModule;
  bankDetailsForm:FormGroup;
  error_messages = {
    'claimamount': [
      { type: 'required', message: 'Claim Amount is required.' },
    ],

    'IFSCcode': [
      { type: 'required', message: 'IFSC Code is required.' }
    ],

    'Holder Name': [
      { type: 'required', message: 'Holder Name is required.' }
      
    ],

    'accountno': [
      { type: 'required', message: 'Account Number is required.' },
      { type: 'minlength', message: 'Account Number length' },
      { type: 'maxlength', message: 'Invalid Account Number' }
    ],
    'confirmaccountno': [
      { type: 'required', message: 'Confirm Account Number is required.' },
      { type: 'minlength', message: 'Invalid' },
      { type: 'maxlength', message: 'Invalid' }
    ],
  }


  constructor(private service:InsuranceService ,private router:Router, public formBuilder: FormBuilder){
   
    this.bankDetailsForm = this.formBuilder.group({
      claimamount: new FormControl('', Validators.compose([
        Validators.required
      ])),
      IFSCcode: new FormControl('', Validators.compose([
        Validators.required
      ])),
      holdername: new FormControl('', Validators.compose([
        Validators.required
       
      ])),
      accountno: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmaccountno: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
    }, { 
      validators: this.accountno.bind(this)
    });
  }


  ngOnInit() {
   
}
  currentDate=new Date();
  submitClaim()
  {
    this.service.saveBank(this.bank);
    this.bank=new BankDetailsModule();
    alert(`
           Claim No:
           Date: {{currentDate |date :'yyyy-MM-dd'}}
           Policy No:
           Amount: 
          
           Claimed Succesfully
            `);
    // this.router.navigate(['claim-insurance']);
    

  }
  success:String="Account Number Matched";
  unsuccess:String="Account Number Mismatch";
  accountno(formGroup: FormGroup) {
    const { value: accountno } = formGroup.get('accountno');
    const { value: confirmaccountno } = formGroup.get('confirmaccountno');
    return accountno === confirmaccountno ? "": this.unsuccess;
  }
  

}
