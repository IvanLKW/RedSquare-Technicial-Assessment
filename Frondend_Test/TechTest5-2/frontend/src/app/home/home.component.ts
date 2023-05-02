import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Product } from '../shared/models/Product'
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products:Product[] = [];
  @Input() visible:boolean = false;
  p:number = 1;
  itemsPerPage:number = 10;
  totalProducts:any;
  SortbyParam = '';
  SortDirection = '';
  faSort = faSort;
  faSortUp = faSortUp;
  faSortDown = faSortDown;
  constructor(private productService:ProductService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    let productsObservable:Observable<Product[]>;
    this.route.params.subscribe(params => {
      if(params.searchTerm) {
        productsObservable = this.productService.getAllProductsBySearchTerm(params.searchTerm);
      }
      else if (params.category) {
        productsObservable = this.productService.getAllProductsByCategory(params.category);
      }
      else {
        productsObservable = this.productService.getAll();
      }

      productsObservable.subscribe((serverProducts) => {
        this.products = serverProducts;
        this.totalProducts = serverProducts.length;
      })
    })
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
      this.p = 1;
    }
    else {
      this.SortDirection = 'desc';
      this.p = 1;
    }
  }

  onSelected(value:string): void {
    this.SortbyParam = value;
    this.p = 1;
  }

topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

