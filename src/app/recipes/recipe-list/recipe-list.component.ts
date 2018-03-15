import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private _recservice: RecipeService, 
              private _router: Router,
              private _activatedrouter: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this._recservice.getRecipe();
  }

  onNewRecipe() {
    this._router.navigate(['edit'], {relativeTo: this._activatedrouter})
  }
}
