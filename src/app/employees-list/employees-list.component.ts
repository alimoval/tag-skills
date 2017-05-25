import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { EmployeeService } from './employee-service/employee.service';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  title = 'Tag Skills';

  public employees: any[];
  public languages: any[];
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

  public filters: any[];

  private _queryString: String = '';

  changeCheckboxFilterValue(event): Observable<string[]> {
    if (this.prevCheckbox) {
      this.prevCheckbox.checked = false;
    }
    this.prevCheckbox = event.target;
    this.tags.push(event.target.value);
    this._queryString = `${event.target.getAttribute('data-type')}=${event.target.value.toLowerCase()}`;
    console.log(this._queryString);
    this.getFilteredData();
    return this.inputValue = (event.target.checked) ? event.target.value.toLowerCase() : '';
  };

  changeSortValue(direction) {
    this.sortValue = direction;
  };

// Single subscribe to request to DB to get employees and filters data.
// Connect component with response.

  getData() {
    this._requestService.getData()
      .subscribe(employees => {
        this.employees = employees;
        this.filters = employees[0].filters;
        this.filters.splice(4);
        console.log(this.filters);
        this.languages = this.employees[0].filters[0].data;
        this.platforms = this.employees[0].filters[1].data;
        this.dbEnginesRDBMS = this.employees[0].filters[2].data;
        this.dbEnginesNoSQL = this.employees[0].filters[3].data;
        this.offices = this.employees[0].filters[4].data;
        this.availabilities = this.employees[0].filters[5].data;
        this.typesOfProject = this.employees[0].filters[6].data;
        this.employees = this.employees.splice(1);
      });
  };

  getFilteredData() {
    this._requestService.getFilteredData(this._queryString)
      .subscribe(employees => {
        this.employees = employees;

      });
  };

  clearSearchTerm() {
    this.inputValue = '';
    this._queryString = '';
    this.getData();
    if (this.prevCheckbox) {
      this.prevCheckbox.checked = false;
    }
  }

  constructor(private _requestService: EmployeeService) { }

  ngOnInit() {
    this.getData();
  }

}
