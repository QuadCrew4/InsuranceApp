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

  // p : profileModel;
  policies : Policy[];
  policyNo : string;
  username : string;

  constructor(private service : ProfileService , private router : Router) { }

  ngOnInit() {

    // this.policyNo = localStorage.getItem("policyNo");

  }

  searchName(){
    this.service.search(this.username).subscribe(data => this.policies = data);
  }
}
