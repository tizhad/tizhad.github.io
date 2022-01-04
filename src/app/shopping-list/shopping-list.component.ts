import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[] = [
      new Ingredient("Potato", 2),
      new Ingredient("Tomato", 4),
      new Ingredient("Cheese", 1),
      new Ingredient("Egg", 5),
      new Ingredient("Penne", 1)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
