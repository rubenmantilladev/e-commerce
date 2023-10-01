import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductInCart } from 'src/app/core/products/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  // Show cart
  private showCart$ = new BehaviorSubject<boolean>(false);
  getShowCart() {
    return this.showCart$.asObservable();
  }
  setShowCart(value: boolean) {
    this.showCart$.next(value);
  }

  // Cart items
  private _cartItems: ProductInCart[] = [];
  getcartItems(): ProductInCart[] {
    return [...this._cartItems];
  }
  addItemCart(item: ProductInCart): void {
    // test if item is already in cart
    const itemFound = this._cartItems.find((i) => i.id === item.id);
    if (itemFound) {
      itemFound.quantity += 1;
    } else {
      this._cartItems.unshift({ ...item, quantity: 1 });
    }
  }
  removeItemCart(item: ProductInCart): void {
    const index = this._cartItems.findIndex((i) => i.id === item.id);
    if (index > -1) {
      this._cartItems.splice(index, 1);
    }
  }
}
