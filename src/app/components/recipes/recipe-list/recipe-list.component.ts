import { Component, OnInit } from "@angular/core";

import { Recipe } from "../../../models/recipe.model";

@Component({
  selector: "rb-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  protected recipes: Recipe[] = [
    new Recipe(
      "Test",
      "Testing",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"
    ),
    new Recipe(
      "Test2",
      "Testing2",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"
    )
  ];

  constructor() { }

  ngOnInit() { }
}
