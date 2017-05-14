import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private _employeesUrl = 'api/employees';

  constructor(private _http: Http) { }

  // Http employees request gererated here

  getEmployees(): Observable<Employee[]> {
    return this._http.get(this._employeesUrl)
      .map(response => response.json().data as Employee[])
      .catch(this._handleError);
  }

  private _handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
