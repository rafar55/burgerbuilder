import { Ingredient } from './Ingredient';

export class Burger {
    private _ingredients: Ingredient[];
    

    
    constructor(initialIngredients?: Ingredient[]) {
       this._ingredients = [];
       if(initialIngredients) this._ingredients = initialIngredients;
    } 

  

    get CurrentIngredients() {
      return this._ingredients;
    }

    get Price() : number {
      let basePrice = 1;
      if(this.CurrentIngredients.length === 0) return basePrice;

      basePrice = basePrice + this._ingredients.map(x => x.Price).reduce((acc, current) => {
        return acc + current;
      });

      return basePrice;  
    }

    HasIngredient(ingredientName: string) : boolean {
      return this._ingredients.some(x => x.Name.toLowerCase() === ingredientName.toLowerCase());
    }

    AddIngredient(ingredient: Ingredient) {
      this._ingredients.push(ingredient);
    }

    RemoveIngredient(ingredient: Ingredient) {
      const ingredientToRemove = this._ingredients.find(x => x.Name === ingredient.Name);
      if(!ingredientToRemove) return;
      const index = this._ingredients.indexOf(ingredientToRemove);
      this._ingredients.splice(index, 1);
    }

    
}