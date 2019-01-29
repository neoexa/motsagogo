import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DisplayResultComponent } from './display-result/display-result.component';

import { HttpClientModule } from '@angular/common/http'; 
import { JdmService } from './services/jdm.service';
import { ResultTableComponent } from './result-table/result-table.component';

import {MatSortModule, MatFormFieldModule, MatAutocompleteModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DisplayResultComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSortModule
  ],
  providers: [JdmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
