import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddressModule } from '../Address.model';
import { BankDetailsModule } from '../BankDetails.model';
import { ClaimModule } from '../Claim.model';
import * as VehicleDetails from '../../assets/VehicleDetails.json';
import { Calculate } from 'src/Calculate.Model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface res{
    regno:string;
    vehiclemodel:string;
    price:number;
    purchasedate:string;
    plan:string;

}

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
 
  public insurancePrice=12000;

  
  claimList:ClaimModule[]=[];
  addressDetails:AddressModule[]=[];
  bankDetails:BankDetailsModule[]=[];
  calculateList:any = (VehicleDetails as any).default;
 
results:res;
items=[];
  constructor(private http:HttpClient) {
    this.http.get("assets/VehicleDetails.json").toPromise().then
    (
      data=>{
        console.log(data);
        for(let key in data)
        {
          if(data.hasOwnProperty(key))
          this.items.push(data[key]);
          console.log(this.items);
        }
      }
    );
   }


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
   
    for(let i=0;i<this.items.length;i++){
      if(this.items[i].regno==vehicleno){
     var vehicleprice=this.items[i].price;
    
    var d=parseInt(vehicleprice);
    
     this.insurancePrice=d-((this.vage)*d*0.05);
    }
     
    
  
     
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
