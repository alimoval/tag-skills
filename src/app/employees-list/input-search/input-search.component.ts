import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  @Output()
  public event: EventEmitter<Employee[]> = new EventEmitter<Employee[]>();
  public employees: Employee[];
  public inputEvents: Subject<KeyboardEvent> = new Subject<KeyboardEvent>();

  private _baseEmployeesUrl: string;

  onInput(query: KeyboardEvent) {
    this.inputEvents.next(query);
  }

  constructor(private _http: Http) {
    this._baseEmployeesUrl = 'api/employees';
  }

  ngOnInit() {

    this.inputEvents
      .debounceTime(300)
      .map((event: KeyboardEvent) => (event.target as HTMLInputElement).value)
      // .filter((query: string) => query.length >= 1)
      .switchMap((query: string) =>
        this._http.get(`${this._baseEmployeesUrl}?name=${query}`)
      )
      .map(res => res.json())
      .subscribe(res => {
        this.employees = res;
        this.event.emit(this.employees);
      });
  }

}
