import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddressModule } from '../Address.model';
import { BankDetailsModule } from '../BankDetails.model';
import { ClaimModule } from '../Claim.model';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  
  claimList:ClaimModule[]=[];
  addressDetails:AddressModule[]=[];
  bankDetails:BankDetailsModule[]=[];

  constructor() { }
  saveClaim(claim:ClaimModule)
  {
    this.claimList.push(claim);
  }
  saveBank(bank:BankDetailsModule)
  {
    this.bankDetails.push(bank);
  }
  SaveAddress(address:AddressModule)
  {
    this.addressDetails.push(address);
  }
 
  }
