import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../body-component/body-component.component';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  @Input() recipeId: number = -1;
  @Output() newRecipe = new EventEmitter<Recipe>();

  recipeName: string = "";
  recipeDescription: string = "";

  recipe: Recipe = {
    recipeName: "",
    recipeDescription: "",
    recipeId: -1
  };

  constructor() { }

  ngOnInit(): void {
  }

  addNewRecipe() {
    this.recipe.recipeId = this.recipeId;
    this.recipe.recipeDescription = this.recipeDescription;
    this.recipe.recipeName = this.recipeName;
    console.log(this.recipe);
    this.newRecipe.emit(this.recipe);
  }

}
