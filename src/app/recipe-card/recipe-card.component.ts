import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../body-component/body-component.component';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})

export class RecipeCardComponent implements OnInit {

  @Output() clicked = new EventEmitter<number>();
  @Input() recipe: Recipe = {
    recipeName: "",
    recipeDescription: "",
    recipeId: -1
  };

  constructor() { 
  }

  ngOnInit(): void {
    
  }

  recipeClicked() {
    this.clicked.emit(this.recipe.recipeId);
  }

}
