import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { ClaimhistoryComponent } from './claimhistory/claimhistory.component';
import { FurtherdetailsComponent } from './furtherdetails/furtherdetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PdfComponent } from './pdf/pdf.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { BuyComponent } from '../app/buy/buy.component';
import { PlanComponent } from '../app/plan/plan.component';
import { RenewalComponent } from './renewal/renewal.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { EditclaimComponent } from './editclaim/editclaim.component';
import { AddressComponent } from './address/address.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'calculate', component: CalculateComponent},
  {path:'claim-insurance',component:ClaimInsuranceComponent},
  {path:'furtherdetails',component:FurtherdetailsComponent},
  {path:'pdf',component:PdfComponent},
  {path:'buy',component:BuyComponent},
  {path:'plan',component:PlanComponent},
  {path:'claimhistory',component:ClaimhistoryComponent},
  {path:'calculate',component:CalculateComponent},
  {path:'renewal',component:RenewalComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'editclaim', component: EditclaimComponent},
  {path: 'address', component: AddressComponent},
  {path:'profilecard',component:ProfilecardComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'payment',component:PaymentComponent},
  {path:'**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
