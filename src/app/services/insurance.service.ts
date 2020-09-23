import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddressModule } from '../Address.model';
import { BankDetailsModule } from '../BankDetails.model';
import { ClaimModule } from '../Claim.model';
import * as VehicleDetails from '../../assets/VehicleDetails.json';



@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  
  claimList:ClaimModule[]=[];
  addressDetails:AddressModule[]=[];
  bankDetails:BankDetailsModule[]=[];
  calculateList:any = (VehicleDetails as any).default;
 


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

  getList(){
  var result= this.claimList.find(x=>x.policyno);
  var claimamo=this.bankDetails.find(y=>y.claimamount);
   var array={result,claimamo};
   return array;
  }
   

   Calculate(){
     
     var registrationno=VehicleDetails[0].regno;
     var vehicleprice=VehicleDetails[0].price;
     var buydate=VehicleDetails[0].purchasedate;
     let newbuydate=new Date(buydate);
     var today=new Date();
     var yearDifference;var monthDifference;var noDifference;
     var insurancePrice;
     if(today.getFullYear()==newbuydate.getFullYear())
     {
       if(today.getMonth()==newbuydate.getMonth())
       {
         noDifference= 0;
         insurancePrice=vehicleprice;
       }
       else
       {monthDifference =today.getMonth()-newbuydate.getMonth();
        insurancePrice=vehicleprice-((monthDifference/12)*vehicleprice*0.05);
       }
     }
     else if(today.getFullYear()!=newbuydate.getFullYear())
     {
       yearDifference= today.getFullYear()-newbuydate.getFullYear();
       insurancePrice=vehicleprice-(yearDifference*0.05*vehicleprice)
     }
     
     var difference = today.valueOf()-newbuydate.valueOf();
     
     return insurancePrice;
     
     
   }
   vehicleModel()
   {
     return VehicleDetails[0].vehiclemodel;
   }
   policyType()
   {
     return VehicleDetails[0].plan;
   }
   plan()
  {  var premiumAmount;
    var insurancePrice=this.Calculate();
    if(VehicleDetails[0].plan.toUpperCase()=='COMPREHENSIVE')
    {
      premiumAmount=insurancePrice*0.15;
      return premiumAmount;
    }
    else{
    premiumAmount=insurancePrice*0.12;
    return premiumAmount;
    }
  }
  }
