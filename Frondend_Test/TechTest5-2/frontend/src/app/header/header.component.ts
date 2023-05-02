import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../shared/models/User';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  user!:User;
  cartQuantity = 0;
  constructor(private userService:UserService, cartService:CartService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  logout() {
    this.userService.logout();
  }

  get isAuth() {
    return this.user.token;
  }

}
