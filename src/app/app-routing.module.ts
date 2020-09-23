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
  {path:'claimhistory',component:ClaimhistoryComponent},
  {path:'calculate',component:CalculateComponent},
  {path:'**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
