import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../body-component/body-component.component';

@Component({
  selector: 'app-recipe-description',
  templateUrl: './recipe-description.component.html',
  styleUrls: ['./recipe-description.component.css']
})
export class RecipeDescriptionComponent implements OnInit {

  @Input() details: Recipe = {
    recipeName: "",
    recipeDescription: "",
    recipeId: -1
  };

  dropdownEntries: string[] = [
    "To shopping list",
    "Edit Recipe",
    "Delete Recipe"
  ];

  dropdownVisibility: boolean = false;

  hoverOverList: boolean = false;
  hoverOverButton: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdownVisibility(event: boolean) {
    this.dropdownVisibility = event;
  }

}
