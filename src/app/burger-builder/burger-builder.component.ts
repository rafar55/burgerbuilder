import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../models/Enums';
import { Burger } from '../models/Burguer';
import { JsonPipe } from '@angular/common';

const localkey = "burger;"

@Component({
  selector: 'burger-builder',
  templateUrl: './burger-builder.component.html',
  styleUrls: ['./burger-builder.component.css']
})
export class BurgerBuilderComponent implements OnInit {

  burger: Burger = null;

  constructor() { }

  ngOnInit() {
    console.log('started main');
    this.LoadBurgerFromLocalStorage();
  }

  ToogleIngredient(ingredient: Ingredients) {
    this.burger.ToogleIngredient(ingredient);
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
       this.burger = new Burger(storeData._hasMeat, storeData._hasSalad, storeData._hasCheese);
    }
  }
}
