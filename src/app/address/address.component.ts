import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor() { }
  public date=new Date();
  public claimDate=this.date.toLocaleDateString();
  public claimId:string=localStorage.getItem("sequence");
  public status:string="pending";
  public claimAmount=localStorage.getItem("amount");
  public accountNumber=localStorage.getItem("accountno");
  ngOnInit() {
  }

}
