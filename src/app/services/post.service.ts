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

  getTask(id: String) {
    return this.httpClient.get(this.url + '/' + id);
  }

  createTask(value: String) {
    return this.httpClient.post(this.url, {
      name: value,
    })    
  }

  updateTask(body: any, id: String) {    
    return this.httpClient.patch(this.url +'/'+id, body)
  }

  deleteTask(id: String) {
    console.log(this.url + '/' + id);
    
    return this.httpClient.delete(this.url + '/' + id);
     
  }
}
