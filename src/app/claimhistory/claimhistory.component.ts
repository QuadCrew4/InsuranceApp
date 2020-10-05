  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { BankDetailsModule } from '../BankDetails.model';
import { Policy } from '../policy.model';
  import { ClaimhistoryService } from '../services/claimhistory.service';
  import { InsuranceService } from '../services/insurance.service';
  import { User } from '../user.model';

  @Component({
    selector: 'app-claimhistory',
    templateUrl: './claimhistory.component.html',
    styleUrls: ['./claimhistory.component.css']
  })
  export class ClaimhistoryComponent implements OnInit {

    
    policies : Policy[] = [];
    username : string;

    constructor(private service : ClaimhistoryService) { }

    ngOnInit() {
      this.username = localStorage.getItem("username");
      this.service.findPolicies(this.username).subscribe(data => this.policies = data);
    }
    
  }
