import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../services/payment.service';
import { RenewalService } from '../services/renewal.service';
import { User } from '../user.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  amt: number;
  username : string;
  user: User;
  status: string;
  policyNo : string;
  constructor(private payserv: PaymentService, private router: Router, private renewserv: RenewalService) { }

  ngOnInit() {
    this.username = localStorage.getItem("username");
    this.renewserv.findUser(this.username).subscribe(data => this.user = data);
    this.status = this.payserv.getRenewStatus();
    if(this.status == "true"){
      this.amt = this.payserv.getAmount()-1087;
    }
    else{
      this.amt = this.payserv.getAmount();
    }
  }
  pay(){
    if(this.status == "true"){
      this.policyNo = localStorage.getItem("renewPolicyNo");
      this.renewserv.renew(this.user, this.policyNo);
      // alert("Policy Successfully renewed");
    }
    else{
      this.payserv.addPolicy();
      // alert(`
      //         Congratulations, your payment is successful.
      //         Mail Sent to registered email`
      //         );
    }
    this.router.navigate(['profile']);
  }
}
