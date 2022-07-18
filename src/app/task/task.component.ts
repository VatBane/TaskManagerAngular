import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  public task: any;

  constructor(private route: ActivatedRoute, private service: PostService) { }

  private getInfo = async (id: any) => {
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

}
