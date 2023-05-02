import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../shared/models/Category';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  categories?:Category[];

  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe(serverCategories => {
      this.categories = serverCategories;
    });
  }
}
