import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  readonly width /* = [,,,,,,,,,,]; */
  readonly height /* = [,,,,,,,,,,]; */
  randomDemon: any;
  mario: number;
  count: number = 0;
  constructor() {
    let width = this.get('Please enter board width:');
    if (width) this.width = new Array(width);

    let height = this.get('Please enter board height:');
    if (height) this.height = new Array(height);

  }

  ngOnInit() {
    if(this.height && this.width){
      this.randomDemon = Array.from({ length: 5 }, () => Math.floor(Math.random() * (this.width.length * this.height.length)));
      this.mario = Math.floor((this.width.length * this.height.length) / 2);
      console.log(this.mario);
    }
  }

  handleKeyEvent(keycode, keyname) {
    switch (keyname) {
      case 'Arrow Left':
        if (this.mario > 0) this.mario--; this.count++
        break;
      case 'Arrow Up':
        if (this.mario > 0) this.mario = this.mario - 10; this.count++
        break;
      case 'Arrow Right':
        if (this.mario < (this.width.length * this.height.length) - 1) this.mario++; this.count++
        break;
      case 'Arrow Down':
        if (this.mario < ((this.width.length * this.height.length) - 10)) this.mario = this.mario + 10; this.count++
        break;


      default:
        break;
    }
    this.randomDemon = this.eatFood();
    if (this.randomDemon.length == 0) {
      alert('Game over. Total moves to save princess:' + this.count);
    }

  }

  /**
   * eat food
   */
  eatFood() {
    let avlblFood = this.randomDemon;
    return avlblFood.filter(e => e != this.mario)
  }

  /**get the square box width and height */
  get(msg) {
    let value;
    value = prompt(msg, "10");
    if (value == null || value == "") {
      value = prompt(msg, "10");
    } else {
      return parseInt(value);
    }
  }

}
