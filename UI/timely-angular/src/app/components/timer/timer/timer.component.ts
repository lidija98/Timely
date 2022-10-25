import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { TimerStart} from 'src/app/models/project.model';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  addTimeRequest: TimerStart = {
    id: '',
    start: new Date()
  };

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    
  }

  getTime() {
    let start = new Date().toISOString().slice(0, 19).replace('T', ' ')
    this.projectsService.addTime(this.addTimeRequest)
    .subscribe({
      next: (start) => {
        console.log(start);
      }
    })
  }
}
