import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from '../policy.model';
import { AdminService } from '../services/admin.service';
import { User } from '../user.model';

@Component({
  selector: 'app-editclaim',
  templateUrl: './editclaim.component.html',
  styleUrls: ['./editclaim.component.css']
})
export class EditclaimComponent implements OnInit {

  policy : Policy;
  constructor(private service: AdminService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { 
    this.policy = new Policy();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.service.findByIndex(params['index']).subscribe(data => this.policy = data);
      });
  }
  updateClaim()
  {
    this.service.update(this.policy);
    this.router.navigate(['admin']);
  }
  goBack(){
    this.router.navigate(['admin']);
  }
}
