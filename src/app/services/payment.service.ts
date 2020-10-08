import { Injectable } from '@angular/core';
import { Policy } from '../policy.model';
import { User } from '../user.model';
import { BuyerService } from './buyer.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  policy : Policy;
  user : User;
  monthlyAmount : number;
  amt: number;
  status : string;
  constructor(private buyserv : BuyerService) { }

  setPolicy(pol : Policy, u : User, amount : number){
    this.status = "false";
    this.policy = pol;
    this.user = u;
    this.monthlyAmount = amount;
  }
  addPolicy(){
    this.buyserv.addUserPolicy(this.policy,this.user,this.monthlyAmount);
  }
  setAmount(amount : number){
    this.amt = amount;
  }
  getAmount(): number{
    return this.amt;
  }
  setRenewStatus(){
    this.status = "true";
  }
  getRenewStatus(): string{
    return this.status;
  }
}
