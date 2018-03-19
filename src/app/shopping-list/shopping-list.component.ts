import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit, OnDestroy { 
  ingredients: Ingredient[] = [];
  private subscription: Subscription;

  constructor(private _shpservice: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this._shpservice.getIngredients();
    this.subscription = this._shpservice.ingredientChange.subscribe(
      (ingres: Ingredient[]) => {
        this.ingredients = ingres;
      }
    );
  }

  onEditItem(i: number) {
    this._shpservice.startEditing.next(i);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }



}
