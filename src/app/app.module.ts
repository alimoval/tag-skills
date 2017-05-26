import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesService } from './employees-list/employees-service/employees.service';
import { SortPipe } from './employees-list/sort-pipe/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
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
    EmployeesService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
