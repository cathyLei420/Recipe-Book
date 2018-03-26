import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';


import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {

  constructor(private _http: Http, 
              private _recservice: RecipeService,
              private _authservice: AuthService) { }

  storeRecipes() {
    const token = this._authservice.getToken();
    return this._http.put('https://recipe-book-902b7.firebaseio.com/recipes.json?auth='+token, this._recservice.getRecipe());
  }

  getRecipe() {
    const token = this._authservice.getToken();
  
    this._http.get('https://recipe-book-902b7.firebaseio.com/recipes.json?auth='+token)
    .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this._recservice.setRecipe(recipes);
      }
    );
  }
}
