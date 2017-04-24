import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { EmployeeService } from './employee.service';
import { LanguageService } from './language.service';


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
  public languages: Language[];
  public inputValue: string = '';
  public errorMessage: any = '';

  getEmployees(){
    this._employeeService.getEmployees()
      .subscribe(employees => this.employees = employees,
      error => this.errorMessage = <any>error);
  }

  getLanguages(){
     this._languageService.getLanguages()
      .subscribe(languages => this.languages = languages,
      error => this.errorMessage = <any>error);
  }

  constructor(private _employeeService: EmployeeService, private _languageService: LanguageService) { }

  ngOnInit() {
    this.getEmployees();
    this.getLanguages();
  }



}
