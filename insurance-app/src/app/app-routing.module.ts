import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyComponent } from '../app/buy/buy.component';
import { PlanComponent } from './plan/plan.component';

const routes: Routes = [
  {path:'buy',component: BuyComponent},
  {path:'plan', component: PlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
