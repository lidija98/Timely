import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Projects[] = [];

  projectName: any;
  p: number =1;

  addProjectRequest: Projects = {
    id: '',
    projects: '',
    start: new Date(),
    stop: new Date(),
    duration: new Date()
  };

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private router: Router) { }

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

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        console.log(id);

        if(id){
          this.projectsService.getProject(id)
          .subscribe({
            next: (response) => {
              this.addProjectRequest = response;
              console.log(response);
            }
          })
        }
      }
    })
  }

  stopTime() {
    this.addProjectRequest.stop = new Date();
  }

  addProject(){
    this.projectsService.addProject(this.addProjectRequest.id, this.addProjectRequest)
    .subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigateByUrl('/timer/:id/completed-entries');
    }
  });
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
