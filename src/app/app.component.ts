import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EmployeeService } from './services/employee.service';
import  {employeeList} from './classes/employeeList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private employeeService:EmployeeService){}

   lstemployee : employeeList[];
  
   ngOnInit(){

    this.employeeService.getemployeeList()
    .subscribe(
      data=>
      {
        this.lstemployee=data;
        //console.log(data);
      }
    );
  }
}
