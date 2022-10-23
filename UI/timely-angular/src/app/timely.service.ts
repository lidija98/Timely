import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimelyService {

  readonly timelyUrl = "";

  constructor(private http:HttpClient) { }
}
