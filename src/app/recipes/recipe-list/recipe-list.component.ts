import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private _recservice: RecipeService, 
              private _router: Router,
              private _activatedrouter: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this._recservice.getRecipe();
    this.subscription = this._recservice.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
    });
  }

  onNewRecipe() {
    this._router.navigate(['edit'], {relativeTo: this._activatedrouter})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
