import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tag Skills';

  public employees: Employee[];
  public errorMessage: any = '';

  getEmployees(){
    this._employeeService.getEmployees()
      .subscribe(employees => this.employees = employees,
      error => this.errorMessage = <any>error);
  }

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }



}
