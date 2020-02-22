import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PersonalComponent } from './personal/personal.component';
import { TechnicalComponent } from './technical/technical.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    PagenotfoundComponent,
    EmployeeDetailComponent,
    PersonalComponent,
    TechnicalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
