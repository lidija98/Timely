import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimerStop } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-completed-entries',
  templateUrl: './completed-entries.component.html',
  styleUrls: ['./completed-entries.component.css']
})
export class CompletedEntriesComponent implements OnInit {

  addProjectRequest: TimerStop = {
    id: '',
    projects: '',
    stop: new Date
  };

  constructor( private route: ActivatedRoute,
    private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id) {
          this.projectsService.getProject(id)
          .subscribe({
            next: (response) => {
              this.addProjectRequest = response;
            }
          });
        }
      }
    })
  }
}
