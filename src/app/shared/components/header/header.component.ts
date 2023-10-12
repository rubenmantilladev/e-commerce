import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { AuthService } from 'src/app/pages/auth/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  isAuthenticated!: boolean;

  constructor(
    private shoppingCartSvc: ShoppingCartService,
    private wishlistSvc: WishlistService,
    private authSvc: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.authSvc
      .getUserLoggedInStatus()
      .subscribe((res) => {
        this.isAuthenticated = res;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

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
