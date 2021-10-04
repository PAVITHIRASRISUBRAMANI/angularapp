import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('A test recipe', 'this is test','https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
