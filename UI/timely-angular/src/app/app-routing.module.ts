import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { TimerComponent } from './components/timer/timer/timer.component';

const routes: Routes = [
  { path: '', component: TimerComponent },
  { path: 'timer', component: ProjectListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
