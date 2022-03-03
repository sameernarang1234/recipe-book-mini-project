import { Component, OnInit } from '@angular/core';

export interface Recipe {
  recipeName: string,
  recipeDescription: string,
  recipeId: number
}

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.css']
})

export class BodyComponentComponent implements OnInit {

  recipeId: number = 0;
  isNewRecipeVisible: boolean = false;

  recipes: Recipe[] = [
    {
      recipeName: "Paneer Makhani",
      recipeDescription: "Paneer Makhani",
      recipeId: 0
    },
    {
      recipeName: "Dal Makhani",
      recipeDescription: "Dal Makhani",
      recipeId: 1
    }
  ];

  selected: Recipe = {
    recipeName: "",
    recipeDescription: "",
    recipeId: -1
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.recipes);
  }

  recipeClickHandler(recipeIndex: number) {
    this.selected = this.recipes[recipeIndex];
  }

  newRecipeClickHandler() {
    this.isNewRecipeVisible = !this.isNewRecipeVisible;
  }

  addNewRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.isNewRecipeVisible = false;
  }

}
