import { Component, OnInit, Input } from '@angular/core';
import { Burger } from '../models/Burguer';

@Component({
  selector: 'total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  @Input() burger: Burger;
  currencyCode = 'USD';
  
  constructor() { }

  ngOnInit() { 
  
  }

}
