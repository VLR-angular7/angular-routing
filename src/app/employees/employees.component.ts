import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap} from '@angular/router';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees=[]
  constructor(private router:Router,private route:ActivatedRoute) { }
  selectedId:number;
  ngOnInit() {
    this.employees=[{id:100,name:"Sai"},{id:101,name:"venkat"},
    {id:102,name:"Siva"},{id:103,name:"Udhay"},{id:104,name:"Sahiti"}]
    
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id =params.get('id');
      this.selectedId=parseInt(id);
      console.log(this.selectedId)
    })

  }

  gotoDetail(employee){
    // this.router.navigate(['/employees',employee.id]);
    this.router.navigate([employee.id],{relativeTo:this.route})  // localhost:4200/employees-data/101 
  }

selectedEmployee(employee){
 return employee.id == this.selectedId;
}

}
