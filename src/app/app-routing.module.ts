import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PersonalComponent } from './personal/personal.component';
import { TechnicalComponent } from './technical/technical.component';


const routes: Routes = [
  {path:'',redirectTo:'/employees-data',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'employees-data',component:EmployeesComponent},
  {path:'employees-data/:id',
  component:EmployeeDetailComponent,
  children:[
    {path:'personal',component:PersonalComponent},
    {path:'technical',component:TechnicalComponent},
  ]
},     //wild card route 

  {path:'**',component:PagenotfoundComponent}, 
      //wild card route 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
