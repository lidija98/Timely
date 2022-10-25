import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimerStop, TimerStart } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  table: TimerStart[] = [];

  addProjectRequest: TimerStop = {
    id: '',
    projects: '',
    stop: new Date
  };

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.projectsService.getAllProjects()
    .subscribe({
      next: (projects) => {
        this.table = projects;
      },
      error: (response) => {
        console.log(response);
      }
    })

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          this.projectsService.getProject(id)
          .subscribe({
            next: (response) => {
              this.addProjectRequest = response;
            }
          })
        }
      }
    })
  }

  addProject(){
    this.projectsService.addProject(this.addProjectRequest.id, this.addProjectRequest)
    .subscribe({
      next: (response) => {
        this.router.navigate(['completed-entries']);
    }
  });
}
}
