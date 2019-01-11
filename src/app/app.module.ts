import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadListComponent } from './loans/lead-list.component';
import { MobileNumberFormatter } from './shared/mobilenumberFormatter';
import { HttpClientModule } from '@angular/common/http';
import { LeadDetailsComponent } from './loans/lead-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, LeadListComponent, MobileNumberFormatter, LeadDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'leads', component: LeadListComponent},
      { path: 'leads/:id', component: LeadDetailsComponent},
      { path: '', redirectTo: 'leads', pathMatch: 'full'},
      { path: '**', redirectTo: 'leads', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
