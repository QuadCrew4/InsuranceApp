import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { User } from '../user.model';

@Component({
  selector: 'app-editclaim',
  templateUrl: './editclaim.component.html',
  styleUrls: ['./editclaim.component.css']
})
export class EditclaimComponent implements OnInit {

  user : User;
  constructor(private service: AdminService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { 
    this.user = new User();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.service.findByIndex(params['index']).subscribe(data => this.user = data);
      });
  }
  updateClaim()
  {
    this.service.update(this.user);
    this.router.navigate(['admin']);
  }

}
