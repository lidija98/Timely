import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedEntriesComponent } from './components/projects/completed-entries/completed-entries.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { TimerComponent } from './components/timer/timer/timer.component';

const routes: Routes = [
  { path: '', component: TimerComponent },
  { path: 'timer', component: ProjectListComponent },
  { path: 'timer/:id', component: ProjectListComponent },
  { path: 'timer/:id/completed-entries', component: CompletedEntriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
