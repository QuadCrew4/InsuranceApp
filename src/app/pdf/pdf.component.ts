import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressModule } from '../Address.model';

import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  address = new AddressModule;
  constructor(private service:InsuranceService ,private router:Router) { }

  ngOnInit() {
  }
  proceedSecond() {
 
    // this.service.SaveAddress(this.address);
    this.address=new AddressModule();
    this.router.navigate(['furtherdetails']);  
  }
  onFileSelected(event)
  {
    console.log(event);
  }
  
}
