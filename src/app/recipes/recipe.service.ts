import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('a test recipe', 'just test', 
        'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 2)
        ]),
        new Recipe('a test recipe1', 'just test1', 
        'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ]),
    ];

    constructor(private _slservice: ShoppingListService) { }

    getRecipe() {
        return this.recipes.slice();
    }

    getRecipeById(id: number) {
        return this.recipes[id];
    }

    onAddtoShoppinglist(ingredients: Ingredient[]) {
        this._slservice.addIngredients(ingredients);
    }
}
