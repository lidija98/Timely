import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TimerStart, TimerStop, Table } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Table[]> {
    return this.http.get<Table[]>(this.baseApiUrl + '/api/timely');
  }

  addTime(addTimeRequest: TimerStart): Observable<TimerStart> {
    addTimeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<TimerStart>(this.baseApiUrl + '/api/timely', addTimeRequest);
  }

  getProject(id: string): Observable<TimerStop> {
    return this.http.get<TimerStop>(this.baseApiUrl + '/api/timely' + id);
  }

  addProject(id: string, addProjectRequest: TimerStop): Observable<TimerStop> {
    return this.http.put<TimerStop>(this.baseApiUrl + '/api/timely' + id, addProjectRequest);
  }
}
