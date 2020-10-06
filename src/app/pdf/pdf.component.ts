  import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Policy } from '../policy.model';
import { ClaimticketService } from '../services/claimticket.service';

  @Component({
    selector: 'app-pdf',
    templateUrl: './pdf.component.html',
    styleUrls: ['./pdf.component.css']
  })
  export class PdfComponent implements OnInit {
    

  constructor(private service:ClaimticketService, private router: Router) { }
  public date=new Date();
  policies:Policy[]=[];
  public claimDate=this.date.toLocaleDateString();
  public status:string="pending";
  public policyNo=localStorage.getItem("policyNo");
   public claimAmount=localStorage.getItem("amount");

  public accountNumber=localStorage.getItem("accountno");
  username:string;
  ngOnInit() {
    this.username = localStorage.getItem("username");
    this.service.findPolicies(this.username).subscribe(data => this.policies = data);
  }
  exit(){
    this.router.navigate(['profile']);
  }
  
  

}

