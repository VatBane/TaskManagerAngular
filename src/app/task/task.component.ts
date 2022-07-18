import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  public task: any;

  constructor(private route: ActivatedRoute, private router: Router, private service: PostService) { }

  private async getInfo(id: any) {
    let res: any;
    res = await lastValueFrom(this.service.getTask(id));
    return res.task;
  }

  async ngOnInit(): Promise<void> {
    let id;
    this.route.paramMap.subscribe(async (params) => {
      id = params.get('id');
    });

    this.task = await this.getInfo(id);  
    console.log(this.task);
  }

  async submitTask(event: any) {
    event.target.blur();

    if (!this.task.name) {
      alert('Please, enter your task');
      return;
    }
    
    const res = this.service.updateTask({
      "name": this.task.name,
      "completed": this.task.completed
    }, this.task._id);

    let task: any;
    task = await lastValueFrom(res);
  
    this.task.name = task.task.name;
    this.task._id = task.task._id;

    console.log(task);
    console.log(this.task);
  }

  async changeStatus() {
    if (this.task.completed == true) {
      this.task.completed = false;
    }
    else {
      this.task.completed = true;
    }
  }

  closeCard() {
    this.router.navigate(['/'])
  }
}
