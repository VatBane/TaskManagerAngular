import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  tasks: any;

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getTasks().subscribe(response => {
      this.tasks = response;
    });
  }
}
