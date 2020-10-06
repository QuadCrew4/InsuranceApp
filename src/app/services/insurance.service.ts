          import { HttpClient } from '@angular/common/http';
          import { Injectable } from '@angular/core';
          import { Observable } from 'rxjs';
          import { ClaimInsurance } from '../claim.model';
import { ClaimPdf } from '../ClaimPdf.model';
          
          import { User } from '../user.model';
          import { Vehicle } from '../vehicle.model';

          @Injectable({
            providedIn: 'root'
          })
          export class InsuranceService {
            private baseUrl: string = "http://localhost:8080/Insurance_projectGladiator/rest";
            
            vehicle = new Vehicle;

            insurancePrice : number;

            premiumAmount : number;

            vage : number;
            accountno:String="20202020";


            constructor(private http : HttpClient) { }
            find(regNo: string): Observable<Vehicle>{
              return this.http.get<Vehicle>(this.baseUrl+"/fetchvehicle/"+regNo);
            }
            saveBank(username:string,policyNo:string,bank:ClaimInsurance)
            {
              this.http.post(this.baseUrl+"/addclaim/"+username+","+policyNo,bank).subscribe(data => data = bank);
            }

            
          
            
            
            calculate(regNo : string, plan : string, age : string) : number{
              if(age==="6 months")
                this.vage=0.5;
              else if(age=="one year")
                this.vage=1;
              else if(age=="two years")
                this.vage=2;
              else if(age == "three years")
                this.vage=3;
              else if (age == "more than 5")
                this.vage=5;
              this.find(regNo).subscribe(data => this.vehicle = data);
              this.insurancePrice = (this.vehicle.price) - ((this.vehicle.price) * this.vage * 0.05)

              return this.insurancePrice;
            }
            plan(plan: string) : number{
              if(plan=='Comprehensive')
                this.premiumAmount=this.insurancePrice*0.15;
              else
                this.premiumAmount=this.insurancePrice*0.12;
              return this.premiumAmount;
            }
          }