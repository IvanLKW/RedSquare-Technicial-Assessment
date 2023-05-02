import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/Product';
import { Category } from '../../shared/models/Category';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PRODUCTS_URL, PRODUCT_BY_ID_URL, PRODUCT_BY_SEARCH_URL, PRODUCTS_CATEGORIES_URL, PRODUCT_BY_CATEGORY_URL } from 'src/app/shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProductById(id:number): Observable<Product> {
    return this.http.get<Product>(PRODUCT_BY_ID_URL + id);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(PRODUCTS_CATEGORIES_URL)
  }
  
  getAllProductsBySearchTerm(searchTerm:string) {
    return this.http.get<Product[]>(PRODUCT_BY_SEARCH_URL + searchTerm)
  }

  getAllProductsByCategory(category:string): Observable<Product[]>{
    return category == "All" ? 
      this.getAll() : 
      this.http.get<Product[]>(PRODUCT_BY_CATEGORY_URL + category)
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCTS_URL)
  }
}
