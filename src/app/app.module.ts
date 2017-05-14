import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeService } from './employees-list/employee-service/employee.service';
import { FilterService } from './employees-list/filter-service/filter.service';
import { SearchFilterPipe } from './employees-list/search-filter-pipe/search-filter.pipe';
import { SortPipe } from './employees-list/sort-pipe/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    SortPipe,
    EmployeesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    EmployeeService,
    FilterService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
