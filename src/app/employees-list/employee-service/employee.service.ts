import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private _employeesUrl = 'api/employees';

  constructor(private _http: Http) { }

  // Http employees and filters request.
  // Class RequestOptions as query with search parameters.

  getEmployees(query): Observable<any[]> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({
      headers: headers,
      // Have to make a URLSearchParams with a query string
      search: new URLSearchParams(query)
    });

    return this._http.get(this._employeesUrl, options)
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
