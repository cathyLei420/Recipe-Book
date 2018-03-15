import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredient[] = [];
  constructor(private _shpservice: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this._shpservice.getIngredients();
    this._shpservice.ingredientChange.subscribe(
      (ingres: Ingredient[]) => {
        this.ingredients = ingres;
      }
    );
  }

}
