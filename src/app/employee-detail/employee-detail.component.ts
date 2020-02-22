import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  employeeId:number;
  employeeName:string
  ngOnInit() {
    // let id=this.route.snapshot.paramMap.get('id');
    // this.employeeId=parseInt(id);
    
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id =params.get('id');
      this.employeeId=parseInt(id);
      console.log(id)
    })
  }

  gotoPrevious(){
    let previousId=this.employeeId-1;
    this.router.navigate(['/employees',previousId])
  }
  gotoNext(){
    console.log("current Emp Id"+this.employeeId)
    let nextId=this.employeeId+1;
    console.log( "next emp id :"+nextId)
     this.router.navigate(['/employees',nextId])
  }

  gotoEmployee(){
   // this.router.navigate(['/employees',{id:this.employeeId}])

this.router.navigate(['../',{id:this.employeeId}],{relativeTo:this.route});

  }

  personalDetils(){
    this.router.navigate(['personal'],{relativeTo:this.route})
  }
  technicalDetails(){
    this.router.navigate(['technical'],{relativeTo:this.route})
  }

}
