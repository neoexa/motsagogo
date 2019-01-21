import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayResultComponent } from './display-result/display-result.component';

import { HttpClientModule } from '@angular/common/http'; 
import { JdmService } from './services/jdm.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [JdmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
