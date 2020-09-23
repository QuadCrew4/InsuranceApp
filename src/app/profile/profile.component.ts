import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  claim()
  {
    this.router.navigate(['claim-insurance']);
  }
  history(){
    this.router.navigate(['claimhistory']);
  }
  buy(){
<<<<<<< HEAD
    this.router.navigate(['calculate']);
  }

=======
    this.router.navigate(['buy']);
  }
>>>>>>> 8b06c0fbfaea0096cfe2c5e3dfd8d09e3c9a17f9
}
