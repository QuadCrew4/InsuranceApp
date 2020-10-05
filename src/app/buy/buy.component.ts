import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { BuyerService} from '../services/buyer.service';
import { Vehicle } from '../vehicle.model';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  b : Vehicle;
  regno1 : string = '';

  constructor( private service : BuyerService , private router : Router) { }

  ngOnInit() {
    $('document').ready(function(){
      $('.image').click(function(){
        
        $('.image').removeClass('active'); //removes old active class
        $(this).addClass('active');

      });
    });
  }

  searchNo(){
    this.service.search(this.regno1).subscribe(data => this.b = data)
  }

  

  proceed(){
    localStorage.setItem("regNo",this.regno1);
    this.router.navigate(['plan']);
  }

}
