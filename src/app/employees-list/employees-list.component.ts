import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { EmployeesService } from './employees.service';

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

  public leftFilters: any[];
  public rightFilters: any[];
  public filterType: string;

  private _queryString: String = '';

  changeCheckboxFilterValue(event, type): Observable<string[]> {
    if (this.prevCheckbox) {
      this.prevCheckbox.checked = false;
    }
    this.prevCheckbox = event.target;
    this.tags.push(event.target.value);
    this._queryString = `${event.target.parentNode.getAttribute('data-type')}=${event.target.value.toLowerCase()}`;
    console.log(this._queryString);
    this.getFilteredData();
    return this.inputValue = (event.target.checked) ? event.target.value.toLowerCase() : '';
  };

  changeSortValue(direction) {
    this.sortValue = direction;
  };

/**
 * Single subscribe to request to DB to get employees and filters data.
 * Connect component with response.
 */

  getData() {
    this._requestService.getData()
      .subscribe(employees => {
        this.leftFilters = employees[0].filters.splice(0, 4);
        this.rightFilters = employees[0].filters;
        this.employees = employees.splice(1);
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

  constructor(private _requestService: EmployeesService) { }

  ngOnInit() {
    this.getData();
  }

}
