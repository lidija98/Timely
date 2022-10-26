import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projects } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.baseApiUrl + '/api/timely');
  }

  addTime(addTimeRequest: Projects): Observable<Projects> {
    addTimeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Projects>(this.baseApiUrl + '/api/timely', addTimeRequest);
  }

  getProject(id: string): Observable<Projects> {
    return this.http.get<Projects>(this.baseApiUrl + '/api/timely/' + id);
  }

  addProject(id: string, addProjectRequest: Projects): Observable<Projects> {
    return this.http.put<Projects>(this.baseApiUrl + '/api/timely/' + id, addProjectRequest);
  }
}
