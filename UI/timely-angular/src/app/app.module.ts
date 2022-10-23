import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelyComponent } from './timely/timely.component';
import { ShowTimelyComponent } from './timely/show-timely/show-timely.component';
import { AddEditTimelyComponent } from './timely/add-edit-timely/add-edit-timely.component';
import { TimelyService } from './timely.service';

@NgModule({
  declarations: [
    AppComponent,
    TimelyComponent,
    ShowTimelyComponent,
    AddEditTimelyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TimelyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
