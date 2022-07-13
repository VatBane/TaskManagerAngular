import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tasks: any;

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getTasks().subscribe(response => {
      this.tasks = response;
    });
  }
}
