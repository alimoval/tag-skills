import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FilterService } from './filter.service';

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
  public inputValue = '';
  public sortValue = '';
  public prevCheckbox: any;
  public tags: any[] = [];
  public sliceLevel = 4;
  public errorMessage: any = '';

  changeCheckboxFilterValue(event): Observable<string[]> {
    if (this.prevCheckbox) {
      this.prevCheckbox.checked = false;
    }
    this.prevCheckbox = event.target;
    this.tags.push(event.target.value);
     return this.inputValue = (event.target.checked) ? event.target.value.toLowerCase() : '';
  }

  changeSortValue(direction){
    this.sortValue = direction;
  }

  getEmployees(){
    this._employeeService.getEmployees()
      .subscribe(employees => this.employees = employees,
      error => this.errorMessage = <any>error);
  }

  getOffices(){
    this._filterService.getOffices()
    .subscribe(offices => this.offices = offices,
      error => this.errorMessage = <any>error);
  }

  getLanguages(){
     this._filterService.getLanguages()
      .subscribe(languages => this.languages = languages,
      error => this.errorMessage = <any>error);
  }

  getPlatforms(){
    this._filterService.getPlatforms()
      .subscribe(platforms => this.platforms = platforms,
      error => this.errorMessage = <any>error);
  }

  getDbEnginesRDBMS(){
    this._filterService.getDbEnginesRDBMS()
      .subscribe(dbEnginesRDBMS => this.dbEnginesRDBMS = dbEnginesRDBMS,
      error => this.errorMessage = <any>error);
  }

  getDbEnginesNoSQL(){
    this._filterService.getDbEnginesNoSQL()
      .subscribe(dbEnginesNoSQL => this.dbEnginesNoSQL = dbEnginesNoSQL,
      error => this.errorMessage = <any>error);
  }

  getAvailabilities(){
    this._filterService.getAvailabilities()
    .subscribe(availabilities => this.availabilities = availabilities,
      error => this.errorMessage = <any>error);
  }

  getTypesOfProject(){
    this._filterService.getTypesOfProject()
    .subscribe(typesOfProject => this.typesOfProject = typesOfProject);
  }

  clearSearchTerm(){
    this.inputValue = '';
    if (this.prevCheckbox) {
      this.prevCheckbox.checked = false;
    }
  }

  constructor(private _employeeService: EmployeeService, private _filterService: FilterService) { }

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
