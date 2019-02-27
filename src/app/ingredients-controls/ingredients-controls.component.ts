import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Burger } from '../models/Burguer';
import { Ingredient, IngredientsCatalog } from '../models/Ingredient';


@Component({
  selector: 'ingredients-controls',
  templateUrl: './ingredients-controls.component.html',
  styleUrls: ['./ingredients-controls.component.css']
})



export class IngredientsControlsComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientRemoved = new EventEmitter<Ingredient>();
  @Input() burger: Burger;
  ingredientsList = IngredientsCatalog;

  constructor() { }

  ngOnInit() {
  }

  AddIngredient(ingredient: Ingredient) {
    console.log('Ingrediente agregado: ' + ingredient);
    this.ingredientAdded.emit(ingredient);        
  }

  RemoveIngredient(ingredient: Ingredient) {
    console.log('Ingredient se quito:' + ingredient);
    this.ingredientRemoved.emit(ingredient);    
  }

}
