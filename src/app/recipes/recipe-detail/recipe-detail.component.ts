import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeInput: Recipe;
  id: number;
  constructor(private _recservice: RecipeService, private _activedrouter: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._activedrouter.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.recipeInput = this._recservice.getRecipeById(this.id);
      }
    )

  }

  onAddtoShoppinglist() {
    this._recservice.onAddtoShoppinglist(this.recipeInput.ingredients);
  }

  onEditRecipe() {
    // this._router.navigate(['edit'],{relativeTo: this._activedrouter});
    this._router.navigate(['../', this.id, 'edit'],{relativeTo: this._activedrouter});
  }

}
