import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.username= localStorage.getItem("username");
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
