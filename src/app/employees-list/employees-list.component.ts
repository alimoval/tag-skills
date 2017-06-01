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

  public employees: any[];
  public inputValue = '';
  public sortValue = '';
  public prevCheckbox: any;
  public tags: any[] = [];
  public sliceLevel = 4;

  public leftFilters: any[];
  public rightFilters: any[];

  private _queryString: String = '';

  changeCheckboxFilterValue(event, type): Observable<string[]> {
    if (this.prevCheckbox) {
      this.prevCheckbox.checked = false;
    }
    this.prevCheckbox = event.target;
    this.tags.push(event.target.value);
    this._queryString = `${event.target.parentNode.getAttribute('data-type')}=${event.target.value.toLowerCase()}`;
    this.getData(this._queryString);
    return this.inputValue = (event.target.checked) ? event.target.value.toLowerCase() : '';
  };

  changeSortValue(direction) {
    this.sortValue = direction;
  };

  /**
   * Single subscribe to request to DB to get employees and filters data.
   * Connect component with response.
   */

  getData(query?) {
    if (!query) {
      this._requestService.getData()
        .subscribe(employees => {
          this.leftFilters = employees[0].filters.splice(0, 4);
          this.rightFilters = employees[0].filters;
          this.employees = employees.splice(1);
        });
    } else {
      const queryString = query;
      this._requestService.getData(queryString)
        .subscribe(employees => {
          this.employees = employees;
        });
    }
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
