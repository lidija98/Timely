import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseApiUrl + '/api/timely');
  }
}
