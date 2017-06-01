import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeesService {

  private _baseEmployeesUrl: string;

  constructor(private _http: Http) {
    this._baseEmployeesUrl = 'api/employees';
  }

/**
 * Employees and filters request by http.get method
 * Class RequestOptions as query with search parameters.
 */

  getData(query?): Observable<any[]> {
    if (!query) {
      return this._http.get(this._baseEmployeesUrl)
        .map(response => response.json().data as Employee[])
        .catch(this._handleError);
    }

    const options = new RequestOptions({
      search: new URLSearchParams(query)
    });

    return this._http.get(this._baseEmployeesUrl, options)
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
