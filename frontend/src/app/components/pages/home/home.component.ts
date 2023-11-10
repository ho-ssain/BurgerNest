import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService, activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.foods = foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag) this.foods = foodService.getFoodsByTag(params.tag);
      else this.foods = foodService.getAll();
    });
  }
}
