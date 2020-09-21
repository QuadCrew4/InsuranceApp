import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { ClaimhistoryComponent } from './claimhistory/claimhistory.component';
import { FurtherdetailsComponent } from './furtherdetails/furtherdetails.component';
import { PdfComponent } from './pdf/pdf.component';


const routes: Routes = [
  {path:'claim-insurance',component:ClaimInsuranceComponent},
  {path:'furtherdetails',component:FurtherdetailsComponent},
  {path:'pdf',component:PdfComponent},
  {path:'claimhistory',component:ClaimhistoryComponent},
  {path:'',redirectTo:'/claim-insurance',pathMatch:'full'},
  {path:'**',redirectTo:'/claim-insurance',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
