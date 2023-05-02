import { Component } from '@angular/core';
import { Product } from '../shared/models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product/product.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent {
  product!: Product;

  constructor(private activatedRoute:ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        productService.getProductById(params.id).subscribe(serverProduct => {this.product = serverProduct;});
    })
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page');
  }
  
}
