import { Component, OnInit, Input } from '@angular/core';
import { Burger } from '../models/Burguer';
import { AggregatedIngredientMap } from '../models/Ingredient';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() ingredientMap: AggregatedIngredientMap;
  @Input() currencyCode: string;
  constructor() {}

  ngOnInit() {}
  get ingredientList() {
    return Object.keys(this.ingredientMap).map(key => {
      const ingred = this.ingredientMap[key];
      const first = ingred[0];
      return {
        name: first.Name,
        total: ingred.length * first.Price,
        count: ingred.length
      };
    });
  }
}
