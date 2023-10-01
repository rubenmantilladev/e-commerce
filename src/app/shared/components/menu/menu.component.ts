import { Component, Input } from '@angular/core';
import { Menu } from '../../models/cartMenu.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input()
  itemsMenu!: Menu[];

  constructor(
    private shoppingCartSvc: ShoppingCartService,
    private wishlistSvc: WishlistService
  ) {}

  openCart() {
    this.shoppingCartSvc.setShowCart(true);
  }

  openWishlist() {
    this.wishlistSvc.setShowWishlist(true);
  }
}
