import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import {LanguageService} from './language.service';
import { NameFilterPipe } from './name-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NameFilterPipe
  ],
  imports: [
    BrowserModule,
    NgSemanticModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ EmployeeService, LanguageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
