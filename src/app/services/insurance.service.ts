import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddressModule } from '../Address.model';
import { BankDetailsModule } from '../BankDetails.model';
import { ClaimModule } from '../Claim.model';
import * as VehicleDetails from '../../assets/VehicleDetails.json';
import { Calculate } from 'src/Calculate.Model';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Login } from '../login.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
 
  public insurancePrice=12000;
  private baseUrl: string = "http://localhost:8080/Insurance_projectGladiator/rest";
  
  claimList:ClaimModule[]=[];
  addressDetails:AddressModule[]=[];
  bankDetails:BankDetailsModule[]=[];
  calculateList:any = (VehicleDetails as any).default;
 

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
      this.http.post(this.baseUrl+"/addclaim",claim).subscribe(data => data = claim);
     
     
     
    
     
    
  }
  
  saveBank(bank:ClaimModule)
  {
     this.claimList.push(bank);
     var policyNo="ABCD1234";
     var username="saiteja";
     var claimId="CL_01403";
     const params = new HttpParams().append('username',username).append('policyNo',policyNo).append('claimId',claimId);
     this.http.put(this.baseUrl+"/adduserpolicyclaim",{params : params});
    // var myJsonString=(JSON.stringify(this.claimList));
    // console.log(myJsonString);
    // this.http.post(this.baseUrl+"/addclaim",myJsonString).subscribe(data => data = myJsonString);
  }
  SaveAddress(address:ClaimModule)
  {
    this.claimList.push(address);
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
