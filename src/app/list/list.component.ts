import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tasks: any;

  constructor(private service: PostService) {}

  async ngOnInit(): Promise<void> {
    // this.service.getTasks().subscribe(response => {
    //   this.tasks = response;
    // });

    const tasks$ = this.service.getTasks();
    this.tasks = await lastValueFrom(tasks$);
    console.log(this.tasks);
  }
}
