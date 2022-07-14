import { Component, OnInit} from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit{

  @Input() public task: any;

  public imgUrl: String = '';
  public name: String = '';
  public status: String = '';

  constructor() { }

  ngOnInit () {
    this.imgUrl = '../../assets/img/' + this.task.completed + '.png';
    this.name = this.task.name;
    this.status = this.task.completed;
  }
}
