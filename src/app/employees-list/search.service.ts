import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

      public inputEvents: Subject<KeyboardEvent> = new Subject<KeyboardEvent>();

      private _baseEmployeesUrl: string;

      onInput(query: KeyboardEvent) {
            this.inputEvents.next(query);
      }

      constructor(private _http: Http) {
            this._baseEmployeesUrl = 'api/employees';

            const options = new RequestOptions({
                  search: new URLSearchParams(this.inputEvents.toString())
            });

            this.inputEvents
                  .debounceTime(300)
                  .map((event: KeyboardEvent) => (event.target as HTMLInputElement).value)
                  .filter((query: string) => query.length >= 1)
                  .switchMap((query: string) =>
                        this._http.get(this._baseEmployeesUrl, options)
                  )
                  .map(res => res.json())
                  .subscribe();

      }

}