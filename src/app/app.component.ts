import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { EmployeeService } from './employee.service';
import { LanguageService } from './language.service';

import { Observable } from 'rxjs/Observable';

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
  public platforms: any[];
  public dbEnginesRDBMS: any[];
  public dbEnginesNoSQL: any[];
  public typesOfProject: any[];
  public availabilities: any[];
  public offices: any[];
  public inputValue: string = '';
  public prevCheckbox: any;
  public tags: any[] = [];
  public sliceLevel: number = 4;
  public errorMessage: any = '';

  changeCheckboxFilterValue(event): Observable<string[]> {
    if (this.prevCheckbox) this.prevCheckbox.checked = false;
    this.prevCheckbox = event.target;
    this.tags.push(event.target.value);
     return this.inputValue = (event.target.checked) ? event.target.value.toLowerCase() : '';
  }

  getEmployees(){
    this._employeeService.getEmployees()
      .subscribe(employees => this.employees = employees,
      error => this.errorMessage = <any>error);
  }

  getOffices(){
    this._languageService.getOffices()
    .subscribe(offices => this.offices = offices,
      error => this.errorMessage = <any>error);
  }

  getLanguages(){
     this._languageService.getLanguages()
      .subscribe(languages => this.languages = languages,
      error => this.errorMessage = <any>error);
  }

  getPlatforms(){
    this._languageService.getPlatforms()
      .subscribe(platforms => this.platforms = platforms,
      error => this.errorMessage = <any>error);
  }

  getDbEnginesRDBMS(){
    this._languageService.getDbEnginesRDBMS()
      .subscribe(dbEnginesRDBMS => this.dbEnginesRDBMS = dbEnginesRDBMS,
      error => this.errorMessage = <any>error);
  }

  getDbEnginesNoSQL(){
    this._languageService.getDbEnginesNoSQL()
      .subscribe(dbEnginesNoSQL => this.dbEnginesNoSQL = dbEnginesNoSQL,
      error => this.errorMessage = <any>error);
  }

  getAvailabilities(){
    this._languageService.getAvailabilities()
    .subscribe(availabilities => this.availabilities = availabilities,
      error => this.errorMessage = <any>error);
  }

  getTypesOfProject(){
    this._languageService.getTypesOfProject()
    .subscribe(typesOfProject => this.typesOfProject = typesOfProject);
  }

  clearSearchTerm(){
    this.inputValue = '';
    if (this.prevCheckbox) this.prevCheckbox.checked = false;
  }

  constructor(private _employeeService: EmployeeService, private _languageService: LanguageService) { }

  ngOnInit() {
    this.getEmployees();
    this.getLanguages();
    this.getPlatforms();
    this.getDbEnginesRDBMS();
    this.getDbEnginesNoSQL();
    this.getOffices();
    this.getAvailabilities();
    this.getTypesOfProject();
  }



}
