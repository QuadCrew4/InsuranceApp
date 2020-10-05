  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { AddressModule } from '../Address.model';
  import {  ClaimInsurance } from '../Claim.model';

  import { InsuranceService } from '../services/insurance.service';

  @Component({
    selector: 'app-pdf',
    templateUrl: './pdf.component.html',
    styleUrls: ['./pdf.component.css']
  })
  export class PdfComponent implements OnInit {
    address = new ClaimInsurance;
    constructor(private service:InsuranceService ,private router:Router) { }

    ngOnInit() {
    }
    proceedSecond() {
    localStorage.setItem("vehicleimage",this.address.vehicleimage);
      //this.service.SaveAddress(this.address);
      //this.address=new AddressModule();
      this.router.navigate(['furtherdetails']);  
    }
    onFileSelected(event)
    {
      console.log(event);
    }
    
  }
