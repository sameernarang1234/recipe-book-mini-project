import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponentComponent } from './body-component/body-component.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeDescriptionComponent } from './recipe-description/recipe-description.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { HoverMouseDirective } from './hover-mouse.directive';
import { IsVisibleDirective } from './is-visible.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponentComponent,
    RecipeCardComponent,
    RecipeDescriptionComponent,
    AddRecipeComponent,
    DropDownComponent,
    HoverMouseDirective,
    IsVisibleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
