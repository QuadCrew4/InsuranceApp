import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddressModule } from '../Address.model';
import { BankDetailsModule } from '../BankDetails.model';
import { ClaimModule } from '../Claim.model';
import { History } from '../history.model';

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
  // getList():History[]{
   
  //   return this.HistoryList;
  // }
  getList(){
  var result= this.claimList.find(x=>x.policyno);
  var claimamo=this.bankDetails.find(y=>y.claimamount);
  var array=[result,claimamo]
 return array;}
  }
