import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.scss']
})
export class CaculatorComponent implements OnInit {
  output: number;
  first: number;
  second: number;
  operator = '+';


  constructor() { }
  // tslint:disable-next-line:typedef
  onFirstChange(value) {
    this.first = Number(value);
  }
  // tslint:disable-next-line:typedef
  onSecondChange(value) {
    this.second = Number(value);
  }
  // tslint:disable-next-line:typedef
  onSelectChange(value) {
    this.operator = value;
  }
  // tslint:disable-next-line:typedef
  calculate() {
    switch (this.operator) {
      case '+':
        console.log(this.first);
        console.log(this.second);
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }

  ngOnInit(): void {
  }

}
