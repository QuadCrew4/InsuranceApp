import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RenewalService } from '../services/renewal.service';
import { User } from '../user.model';

@Component({
  selector: 'app-renewal',
  templateUrl: './renewal.component.html',
  styleUrls: ['./renewal.component.css']
})
export class RenewalComponent implements OnInit {

  username : string;
  user : User;
  policyNo : string;

  constructor(private service: RenewalService, private router: Router) { }

  ngOnInit() {
    this.username = localStorage.getItem("username");
    this.service.findUser(this.username).subscribe(data => this.user = data);
  }
  renew(){
    this.service.renew(this.user, this.policyNo);
    alert("Policy Successfully renewed");
    this.router.navigate(['profile']);
  }
  goBack(){
    this.router.navigate(['profile']);
  }
}
