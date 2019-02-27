import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Ingredients } from '../models/Enums';
import { Burger } from '../models/Burguer';


@Component({
  selector: 'ingredients-controls',
  templateUrl: './ingredients-controls.component.html',
  styleUrls: ['./ingredients-controls.component.css']
})



export class IngredientsControlsComponent implements OnInit {

  @Output() ingredientAdded: EventEmitter<Ingredients> = new EventEmitter();
  @Input() burger: Burger;
  Ingredients  = Ingredients;

  constructor() { }

  ngOnInit() {
  }

  AddIngredient(ingredient: Ingredients) {
    console.log('Ingrediente agregado: ' + ingredient);
    this.ingredientAdded.emit(ingredient);        
  }

}
