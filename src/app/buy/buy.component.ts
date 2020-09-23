import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { BuyerModel } from '../buyer.model';
import { BuyerService} from '../services/buyer.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  b : BuyerModel;
  regno1 : string;

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
    this.b = this.service.search((this.regno1).toString());
  }

  proceed(){
   // this.b = new BuyerModel();
    this.router.navigate(['plan']);
  }

}
