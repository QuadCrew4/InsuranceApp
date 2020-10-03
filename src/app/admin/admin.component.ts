import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { LoginService } from '../services/login.service';
import { User } from '../user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  list: User[] = [];
  constructor(private router: Router, private service: LoginService, private admin: AdminService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(data => this.list = data);
  }

  editClaim(index : number){
    this.admin.edit(index);
  }
  // delete(index : number) {
  //   var ans = confirm("Are you sure you want to delete?");
  //   if(ans) {
  //     this.service.deleteUser(index);
  //   }
  // }
  // editUser(index : number)
  // {
  //   this.service.edit(index);
  // }
}
