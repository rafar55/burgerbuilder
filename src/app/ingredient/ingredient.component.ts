import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input('name') name: string;
   
  constructor() { }

  ngOnInit() {
  }

}
