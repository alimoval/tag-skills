import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LanguageService {

  private _languagesUrl = 'api/languages';

  constructor(private _http: Http) { }

  getLanguages(): Observable<Language[]> {
    return this._http.get(this._languagesUrl)
      .map(response => response.json().data as Language[])
      .catch(this._handleError);
  }

  private _handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
