import { Ingredient, AggregatedIngredientMap } from './Ingredient';

export class Burger {
  private ingredients: Ingredient[];

  constructor(initialIngredients?: Ingredient[]) {
    this.ingredients = [];
    if (initialIngredients) {
      this.ingredients = initialIngredients;
    }
  }

  get CurrentIngredients() {
    return this.ingredients;
  }

  get Price(): number {
    let basePrice = 1;
    if (this.CurrentIngredients.length === 0) {
      return basePrice;
    }

    basePrice =
      basePrice +
      this.ingredients
        .map(x => x.Price)
        .reduce((acc, current) => {
          return acc + current;
        });

    return basePrice;
  }

  HasIngredient(ingredientName: string): boolean {
    return this.ingredients.some(
      x => x.Name.toLowerCase() === ingredientName.toLowerCase()
    );
  }

  AddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  RemoveIngredient(ingredient: Ingredient) {
    const ingredientToRemove = this.ingredients.find(
      x => x.Name === ingredient.Name
    );
    if (!ingredientToRemove) {
      return;
    }
    const index = this.ingredients.indexOf(ingredientToRemove);
    this.ingredients.splice(index, 1);
  }

  getGroupedIngredients(): AggregatedIngredientMap {
    return this.ingredients.reduce(
      (accumulator, currentIngredient) => {
        const { Name: ingredientName } = currentIngredient;
        accumulator[ingredientName] = accumulator[ingredientName] || [];
        accumulator[ingredientName].push(currentIngredient);
        return accumulator;
      },
      {} as AggregatedIngredientMap
    );
  }
}
