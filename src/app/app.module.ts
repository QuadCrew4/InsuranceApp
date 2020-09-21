import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FurtherdetailsComponent } from './furtherdetails/furtherdetails.component';
import { PdfComponent } from './pdf/pdf.component';
import { ClaimhistoryComponent } from './claimhistory/claimhistory.component';


@NgModule({
  declarations: [
    AppComponent,
    ClaimInsuranceComponent,
    FurtherdetailsComponent,
    PdfComponent,
    ClaimhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
