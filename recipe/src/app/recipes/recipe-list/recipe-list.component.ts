import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipies: Recipe [] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://thewoksoflife.com/wp-content/uploads/2019/08/fried-brown-rice-12.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
