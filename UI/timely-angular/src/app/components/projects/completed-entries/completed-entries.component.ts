import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-completed-entries',
  templateUrl: './completed-entries.component.html',
  styleUrls: ['./completed-entries.component.css']
})
export class CompletedEntriesComponent implements OnInit {

  projects: Projects[] = [];

  constructor( private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService,) { }

  ngOnInit(): void {
    this.projectsService.getAllProjects()
    .subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
