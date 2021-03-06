import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PostService } from '../services/post.service';
import { Renderer2 } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  value: String = '';

  constructor(private service: PostService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {}

  async submitTask(event: any) {
    event.target.blur();
    if (!this.value) {
      alert('Please, enter your task');
      return;
    }
    
    const newtask = this.service.createTask(this.value);
    let newT = await firstValueFrom(newtask);
    if (newT) {
      window.location.reload();
    }
  }
}
