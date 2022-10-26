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

  projectName: any;
  p: number =1;

  projects: Projects[] = [];

  constructor( private route: ActivatedRoute,
    private projectsService: ProjectsService) { }

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

  Search(){
    if(this.projectName == ""){
      this.ngOnInit();
    }
    else {
      this.projects = this.projects.filter(res => {
        return res.projects.toLocaleLowerCase().match(this.projectName.toLocaleLowerCase());
      });
    }
  }

  key: string = 'id';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
