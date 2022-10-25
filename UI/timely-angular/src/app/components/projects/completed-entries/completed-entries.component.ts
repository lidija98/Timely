import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-completed-entries',
  templateUrl: './completed-entries.component.html',
  styleUrls: ['./completed-entries.component.css']
})
export class CompletedEntriesComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
