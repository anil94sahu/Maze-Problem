import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  readonly width = [,,,,,,,,,,];
  readonly height = [,,,,,,,,,,];
  randomDemon:any;
  mario:number;
  constructor() { }

  ngOnInit() {
    this.randomDemon = Array.from({length: 5}, () => Math.floor(Math.random() * 100));
    this.mario = Math.floor((this.width.length * this.height.length)/2);
    console.log(this.mario);
  }

  eventHandler(keycode){
    console.log(keycode);

  }

  handleKeyEvent(keycode,keyname){
    switch (keyname) {
      case 'Arrow Left':
      if(this.mario > 0)this.mario--;
        break;
      case 'Arrow Up':
          if(this.mario > 0)this.mario = this.mario - 10;
      break;
      case 'Arrow Right':
      if(this.mario < (this.width.length*this.height.length)-1)this.mario++
      break;
      case 'Arrow Down':
      if(this.mario < ((this.width.length*this.height.length)-10))this.mario = this.mario + 10;
      break;

    
      default:
        break;
    }
  }
}
