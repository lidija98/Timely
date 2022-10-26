import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Projects} from 'src/app/models/project.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  addTimeRequest: Projects = {
    id: '',
    projects: '',
    start: new Date(),
    stop: new Date(),
    duration: new Date()
  };
  static AddTimerRequest: any;

  constructor(private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  getTime() {
    this.projectsService.addTime(this.addTimeRequest)
    .subscribe({
      next: (projects) => {
        console.log(projects);
        this.router.navigate(['/timer/', projects.id])
      }
    })
  }
}
