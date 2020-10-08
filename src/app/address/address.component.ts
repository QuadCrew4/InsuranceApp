import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaimInsurance } from '../claim.model';
import { ClaimPdf } from '../ClaimPdf.model';
import { Policy } from '../policy.model';
import { ClaimticketService } from '../services/claimticket.service';

import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
//  address=new ClaimInsurance;
 vehicleimage : string;
    constructor(private service:InsuranceService ,private router:Router) { }

    ngOnInit() {
    }
    proceedSecond() {
    localStorage.setItem("vehicleimage",this.vehicleimage);
      this.router.navigate(['furtherdetails']);  
    }
    onFileSelected(event)
    {
      console.log(event);
    }
    
  }