import { Component, OnInit, Input, Output } from '@angular/core';
import { Burger } from '../models/Burguer';

@Component({
  selector: 'burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  @Input() burger: Burger;
  
  constructor() { }

  ngOnInit() {
    console.log('started burger');
    console.log(this.burger);
  }

}
