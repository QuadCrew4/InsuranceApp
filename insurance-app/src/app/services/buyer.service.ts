import { Injectable } from '@angular/core';
import { BuyerModel } from '../buyer.model';
import * as details from '../../assets/details.json';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  buyers : any = (details as any).default;

  constructor(private router : Router) { }

  search(regno : string) : BuyerModel {
    let result = this.buyers.find(x => x.regno == regno);
    if(result == null)
      return null;
    else
      return result;
  }

}
