import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilterService {

  private _languagesUrl = 'api/languages';
  private _platformsUrl = 'api/platforms';
  private _dbEnginesRDBMS = 'api/dbEnginesRDBMS';
  private _dbEnginesNoSQL = 'api/dbEnginesNoSQL';
  private _offices = 'api/offices';
  private _availabilities = 'api/availabilities';
  private _typesOfProject = 'api/typesOfProject';

  constructor(private _http: Http) { }

  getLanguages(): Observable<Language[]> {
    return this._http.get(this._languagesUrl)
      .map(response => response.json().data as Language[])
      .catch(this._handleError);
  }

  getPlatforms(): Observable<any[]> {
    return this._http.get(this._platformsUrl)
      .map(responce => responce.json().data as any[])
      .catch(this._handleError);
  }

  getDbEnginesRDBMS(): Observable<any[]> {
    return this._http.get(this._dbEnginesRDBMS)
      .map(responce => responce.json().data as any[])
      .catch(this._handleError);
  }

  getDbEnginesNoSQL(): Observable<any[]> {
    return this._http.get(this._dbEnginesNoSQL)
      .map(responce => responce.json().data as any[])
      .catch(this._handleError);
  }

  getOffices(): Observable<any[]> {
    return this._http.get(this._offices)
      .map(responce => responce.json().data as any[])
      .catch(this._handleError);
  }

  getAvailabilities(): Observable<any[]> {
    return this._http.get(this._availabilities)
      .map(responce => responce.json().data as any[])
      .catch(this._handleError);
  }

  getTypesOfProject(): Observable<any[]> {
    return this._http.get(this._typesOfProject)
      .map(responce => responce.json().data as any[])
      .catch(this._handleError);
  }

  private _handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
