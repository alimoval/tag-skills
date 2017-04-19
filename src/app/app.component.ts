import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
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

  private _employeesUrl = 'api/employees';

  constructor(private _http: Http) { }

  getEmployees(): Observable<Employee[]> {
    return this._http.get(this._employeesUrl)
      .map(response => response.json().data as Employee[])
      .catch(this._handleError);
  }

  private _handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  ngOnInit() {
    this.getEmployees()
      .subscribe(employees => this.employees = employees);
  }



}
