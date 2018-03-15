import { Ingredient} from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientChange = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('mango', 6)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChange.emit(this.ingredients.slice());
    }

    addIngredients(ingres: Ingredient[]) {
        this.ingredients.push(...ingres);
        this.ingredientChange.emit(this.ingredients.slice());
    }
}