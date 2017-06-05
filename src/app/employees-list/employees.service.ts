import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeesService {

  private _baseEmployeesUrl: string;
  private _headers: Headers;

  constructor(private _http: Http) {
    this._baseEmployeesUrl = 'api/employees';
    this._headers = new Headers({ 'Content-Type': 'application/json' });
  }

  /**
   * Employees and filters request by http.get method
   * Class RequestOptions as query with search parameters.
   */

  getData(query?): Observable<any[]> {
    if (!query) {
      return this._http.get(this._baseEmployeesUrl)
        .map(response => response.json().data as Employee[]);
    } else {

      const options = new RequestOptions({
        headers: this._headers,
        search: new URLSearchParams(query)
      });

      return this._http.get(this._baseEmployeesUrl, options)
        .map(response => response.json().data as Employee[]);
    }
  }

}
