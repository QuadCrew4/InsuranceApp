import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankDetailsModule } from '../BankDetails.model';
import { ClaimModule } from '../Claim.model';
import { History } from '../history.model';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-claimhistory',
  templateUrl: './claimhistory.component.html',
  styleUrls: ['./claimhistory.component.css']
})
export class ClaimhistoryComponent implements OnInit {

  
  claimno:number=101;
  date=new Date();
  list: (ClaimModule|BankDetailsModule)[]=[];
 
  constructor(private service :InsuranceService,private router:Router) { }

  ngOnInit() {
    //this.list=this.service.getList();
  }
  
}
