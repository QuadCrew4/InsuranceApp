import { Component, OnInit } from '@angular/core';
import { profileModel} from '../profile.model';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { Policy } from '../policy.model';

@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrls: ['./profilecard.component.css']
})
export class ProfilecardComponent implements OnInit {

  policies : Policy[] = [];
  policyNo : string;
  username : string;
  name: string;

  constructor(private service : ProfileService , private router : Router) { }

  ngOnInit() {
    this.name= localStorage.getItem("uname");
    this.username= localStorage.getItem("username");
    this.service.search(this.username).subscribe(data => this.policies = data);
    // this.policyNo = localStorage.getItem("policyNo");
  }

  back(){
    this.router.navigate(['profile']);
  }

  
  
}
