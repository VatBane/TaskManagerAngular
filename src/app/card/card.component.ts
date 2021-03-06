import { Component, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit{

  @Input() public task: any;

  public name: String = '';
  public status: Boolean = false;
  public id: String = '';

  constructor(private service: PostService, private router: Router) { }

  ngOnInit () {
    this.name = this.task.name;
    this.status = this.task.completed;
    this.id =  this.task._id;
  }

  async changeStatus() {
    if (this.status == true) {
      this.status = false;
    }
    else {
      this.status = true;
    }

    const res = this.service.updateTask({"completed": this.status}, this.id);
    let result = await firstValueFrom(res);
    console.log(result);
  }

  openCard() {
    this.router.navigate(['/', this.id]);
  }

  async deleteCard(event: any) {
    document.getElementById(this.id.valueOf())?.remove();

    // need to rewrite server to solve issue
    const res = this.service.deleteTask(this.id);
    let result = await firstValueFrom(res);
    console.log(result);
  }
}
