          import { Component, OnInit } from '@angular/core';
          import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

          import { Router } from '@angular/router';
          import { BankDetailsModule } from '../BankDetails.model';
          import { ClaimInsurance } from '../Claim.model';
          import { CustomValidationService } from '../services/custom-validation.service';
          import { InsuranceService } from '../services/insurance.service';
        import { RenewalService } from '../services/renewal.service';
          import { User } from '../user.model';

          @Component({
            selector: 'app-furtherdetails',
            templateUrl: './furtherdetails.component.html',
            styleUrls: ['./furtherdetails.component.css']
          })
          export class FurtherdetailsComponent implements OnInit {
            bank = new ClaimInsurance;
            bankDetailsForm:FormGroup;
            username:string;
            user: User;
            policyNo:string;
            
  
  
            constructor(private service:RenewalService, private insser:InsuranceService ,private router:Router, public formBuilder: FormBuilder,private customValidator:CustomValidationService){
            
              this.bankDetailsForm = this.formBuilder.group({
                phoneno:["",[Validators.required,Validators.pattern("[6-9]{1}[0-9]{9}")]],
                IFSCcode: ["",[Validators.required,Validators.pattern("[A-Z]{4}[0-9]{6,}")]],
                holdername:["", [Validators.required,Validators.pattern("[A-Za-z]{3,}")]],
                accountno: ["",[Validators.required,Validators.pattern("[0-9]{8,}")]],
                confirmaccountno: ["",[Validators.required]]
              }, { 
                validator: this.customValidator.accountnoMatchValidator("accountno","confirmaccountno")
              });
            }
  
  
            ngOnInit() {
              this.username = localStorage.getItem("username");
            }
            submitClaim()
            {
              //this.service.saveBank(this.bank);
            // this.bank=new BankDetailsModule();
            //this.service.saveBank(this.bank.bankdetails.accountno);
            this.bank.status=localStorage.getItem("status");
            this.bank.reason=localStorage.getItem("reason");
            this.bank.amount=localStorage.getItem("amount");
            this.bank.claimDate=localStorage.getItem("claimDate");
            this.bank.vehicleimage=localStorage.getItem("vehicleimage");
          
            localStorage.setItem("accountno",this.bank.accountno);
            this.policyNo=localStorage.getItem("policyNo");
          
            this.insser.saveBank(this.username,this.policyNo,this.bank);
          
            this.service.findUser(this.username).subscribe(data => this.user = data);
          
              alert(`
                    Claimed Succesfully
                      `);
              this.router.navigate(['pdf']);
  
             
            
            }
            }
  
            
  