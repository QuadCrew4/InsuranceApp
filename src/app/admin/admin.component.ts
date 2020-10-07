import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Policy } from '../policy.model';
import { AdminService } from '../services/admin.service';
import { LoginService } from '../services/login.service';
import { User } from '../user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  policies: Policy[] = [];
  policy: Policy;
  constructor(private router: Router, private service: LoginService, private admin: AdminService) { }

  ngOnInit() {
    this.policy= new Policy;
    this.admin.getPolicies().subscribe(data => this.policies = data);
  }

  editClaim(index : number){
    this.admin.edit(index);
  }
  showClaim(index: number){
    this.admin.show(index).subscribe(data => this.policy = data);
  }
}
