import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://dobr-task-manager.herokuapp.com/api/v1/tasks'
  
  constructor(private httpClient: HttpClient) { }

  getTasks() {
    return this.httpClient.get(this.url)
  }
}