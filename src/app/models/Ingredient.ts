export interface Ingredient {
  Name: string;
  Price: number;
}

export const IngredientsCatalog: Ingredient[] = [
  { Name: 'Meat', Price: 1.5 },
  { Name: 'Cheese', Price: 0.5 },
  { Name: 'Salad', Price: 0.2 }
];

interface TypedLooseObject<T> {
  [name: string]: T;
}
export type AggregatedIngredientMap = TypedLooseObject<Ingredient[]>;
