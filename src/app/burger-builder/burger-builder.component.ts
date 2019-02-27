import { Component, OnInit } from '@angular/core';
import { Burger } from '../models/Burguer';
import { JsonPipe } from '@angular/common';
import { Ingredient } from '../models/Ingredient';

const localkey = "burger;"

@Component({
  selector: 'burger-builder',
  templateUrl: './burger-builder.component.html',
  styleUrls: ['./burger-builder.component.css']
})
export class BurgerBuilderComponent implements OnInit {

  burger: Burger = new Burger();

  constructor() { }

  ngOnInit() {
    console.log('started main');
    this.LoadBurgerFromLocalStorage();
  }

  AddIngredient(ingredient: Ingredient) {
    this.burger.AddIngredient(ingredient);
    this.SaveBurgerToLocalStorage();
  }

  RemoveIngredient(ingredient: Ingredient) {
    this.burger.RemoveIngredient(ingredient);
    this.SaveBurgerToLocalStorage();
  }

  private SaveBurgerToLocalStorage() {
    const burgerJson = JSON.stringify(this.burger);
    localStorage.setItem(localkey, burgerJson);
  }

  private LoadBurgerFromLocalStorage() {
    const storeJson = localStorage.getItem(localkey);
    if(storeJson) {
       const storeData = JSON.parse(storeJson);
       if(storeData._ingredients) this.burger = new Burger(storeData._ingredients);
    }
  }
}
