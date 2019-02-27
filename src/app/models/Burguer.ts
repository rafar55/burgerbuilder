import { Ingredients } from "./Enums";

export class Burger {
    private _hasMeat: boolean;
    private _hasSalad: boolean;
    private _hasCheese: boolean;
    private _ingredients: 

    constructor(hasMeat: boolean, hasSalad: boolean, hasCheese:boolean) {
        this._hasCheese = hasCheese;
        this._hasMeat = hasMeat;
        this._hasSalad = hasSalad;
    }
    
    get HasMeat() {
        return this._hasMeat;
    }

    get HasCheese() {
        return this._hasCheese;
    }

    get HasSalad() {
        return this._hasSalad;
    }

    get Price() : number {
      let basePrice = 1;
      const meatPrice = 1.50
      const saladPrice = 0.20;
      const cheesePrice = 0.50;
  
      if (this._hasMeat) basePrice += meatPrice;
      if (this._hasCheese) basePrice += cheesePrice;
      if (this._hasSalad) basePrice += saladPrice;

      return basePrice;  
    }

    ToogleIngredient(ingredient: Ingredients) {
        switch(ingredient) {
            case Ingredients.Meat:
              this._hasMeat =  !this._hasMeat;
            break;
            case Ingredients.Cheese:
              this._hasCheese =  !this._hasCheese;
            break;
            case Ingredients.Salad:
              this._hasSalad =  !this._hasSalad;
            break;
          }
    }

    
}