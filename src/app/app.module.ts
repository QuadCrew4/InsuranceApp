import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FurtherdetailsComponent } from './furtherdetails/furtherdetails.component';
import { PdfComponent } from './pdf/pdf.component';
import { ClaimhistoryComponent } from './claimhistory/claimhistory.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { CalculateComponent } from './calculate/calculate.component';
import { BuyComponent } from './buy/buy.component';
import { PlanComponent } from './plan/plan.component';
import { RenewalComponent } from './renewal/renewal.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { HttpClientModule } from '@angular/common/http';
import { EditclaimComponent } from './editclaim/editclaim.component';
import { AddressComponent } from './address/address.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    ClaimInsuranceComponent,
    FurtherdetailsComponent,
    PdfComponent,
    ClaimhistoryComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ProfileComponent,
    AdminComponent,
    CalculateComponent,
    BuyComponent,
    PlanComponent,
    RenewalComponent,
    ProfilecardComponent,
    EditclaimComponent,
    AddressComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
