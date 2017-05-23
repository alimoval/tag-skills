import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { RequestService } from './employees-list/request-service/request.service';
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
    RequestService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
