import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.name= localStorage.getItem("uname");
  }
  claim()
  {
    this.router.navigate(['claim-insurance']);
  }
  history(){
    this.router.navigate(['claimhistory']);
  }
  buy(){
    this.router.navigate(['buy']);
  }
  renew(){
    this.router.navigate(['renewal']);
  }
  profile(){
    this.router.navigate(['profilecard']);
  }
}
