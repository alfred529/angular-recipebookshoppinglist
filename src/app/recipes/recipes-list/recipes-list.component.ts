import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c0.wallpaperflare.com/preview/151/724/894/food-cooking-kitchen-cook.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
