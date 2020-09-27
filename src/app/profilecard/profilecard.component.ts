import { Component, OnInit } from '@angular/core';
import { profileModel} from '../profile.model';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrls: ['./profilecard.component.css']
})
export class ProfilecardComponent implements OnInit {

  p : profileModel;
  uno1 : string = '';

  constructor(private service : ProfileService , private router : Router) { }

  ngOnInit() {
  }

  searchName(){
    this.p = this.service.searchN((this.uno1));
  }
}
