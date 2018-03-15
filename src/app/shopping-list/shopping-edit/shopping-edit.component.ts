import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;

  constructor(private _shpservice: ShoppingListService) { }

  ngOnInit() {
  }

  onAdded(){
    var name = this.nameRef.nativeElement.value;
    var amount = this.amountRef.nativeElement.value;
    var ingre = new Ingredient(name, amount);
    this._shpservice.addIngredient(ingre);
  }
}
