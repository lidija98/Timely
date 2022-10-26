import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { TimerComponent } from './components/timer/timer/timer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CompletedEntriesComponent } from './components/projects/completed-entries/completed-entries.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsService } from './services/projects.service';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    TimerComponent,
    CompletedEntriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
