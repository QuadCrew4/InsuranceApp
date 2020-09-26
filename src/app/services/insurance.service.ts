import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddressModule } from '../Address.model';
import { BankDetailsModule } from '../BankDetails.model';
import { ClaimModule } from '../Claim.model';
import * as VehicleDetails from '../../assets/VehicleDetails.json';
import { Calculate } from 'src/Calculate.Model';



@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
 
  public insurancePrice=12000;

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
  public vage;
Age(age:string)
{
  
  if(age==="6 months")
 {
   this.vage=0.5;
 }
 else if(age=="one year")
 {
   this.vage=1;
 }
 else if(age=="two years")
  this.vage=2;
 else if(age == "three years")
  this.vage=3;
 else if (age == "more than 5")
 {
   this.vage=5;
 }
}

   Calculate(vehicleno:string){
    
   
  

    
      if(VehicleDetails[0].regno==vehicleno){
     var vehicleprice=VehicleDetails[0].price;
    
    var d=parseInt(vehicleprice);
    //  var buydate=VehicleDetails[i].purchasedate;
    //  let newbuydate=new Date(buydate);
    //  var today=new Date();
    //  var yearDifference;var monthDifference;var noDifference;
     
    //  if(today.getFullYear()==newbuydate.getFullYear())
    //  {
    //    if(today.getMonth()==newbuydate.getMonth())
    //    {
    //      noDifference= 0;
    //      insurancePrice=vehicleprice;
    //    }
    //    else
    //    {monthDifference =today.getMonth()-newbuydate.getMonth();
    //     insurancePrice=vehicleprice-((monthDifference/12)*vehicleprice*0.05);
    //    }
    //  }
    //  else if(today.getFullYear()!=newbuydate.getFullYear())
    //  {
    //    yearDifference= today.getFullYear()-newbuydate.getFullYear();
    //    insurancePrice=vehicleprice-(yearDifference*0.05*vehicleprice)
    //  }
     
    //  var difference = today.valueOf()-newbuydate.valueOf();
   
     this.insurancePrice=d-((this.vage)*d*0.05);
    }
     
    
  return this.insurancePrice;
     
   }
   
   plan( plan:string)
  {  var premiumAmount;
    
    if(plan=='Comprehensive')
    {
      premiumAmount=this.insurancePrice*0.15;
      return premiumAmount;
    }
    else{
    premiumAmount=this.insurancePrice*0.12;
    return premiumAmount;
    }
  }
  }
