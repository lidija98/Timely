import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-entries',
  templateUrl: './completed-entries.component.html',
  styleUrls: ['./completed-entries.component.css']
})
export class CompletedEntriesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
