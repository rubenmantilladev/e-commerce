import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { AuthService } from 'src/app/pages/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private shoppingCartSvc: ShoppingCartService,
    private wishlistSvc: WishlistService,
    private authSvc: AuthService,
    private router: Router
  ) {}
  openCart() {
    this.shoppingCartSvc.setShowCart(true);
  }
  openWishlist() {
    this.wishlistSvc.setShowWishlist(true);
  }
  onLogout() {
    this.authSvc.logout();
    this.router.navigate(['/auth/login']);
  }
}
