import { Component, DoCheck, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ProductInCart } from 'src/app/core/products/models/product.model';

@Component({
  selector: 'shared-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, DoCheck {
  showCart!: boolean;
  productList!: ProductInCart[];
  totalPrice!: number;

  constructor(private shoppingCartSvc: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCartSvc.getShowCart().subscribe({
      next: (value) => {
        this.showCart = value;
      },
    });
  }

  moreProduct(product: ProductInCart) {
    product.quantity += 1;
  }

  lessProduct(product: ProductInCart) {
    if (product.quantity > 1) {
      product.quantity -= 1;
    }
  }

  ngDoCheck(): void {
    this.productList = this.shoppingCartSvc.getcartItems();

    // Total Price
    this.totalPrice = this.productList.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  }

  removeProduct(product: ProductInCart) {
    this.shoppingCartSvc.removeItemCart(product);
  }

  onCloseCart() {
    this.shoppingCartSvc.setShowCart(false);
  }
}
