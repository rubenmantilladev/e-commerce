import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ProductInCart, ProductResponse } from '../../models/product.model';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit, DoCheck {
  @Input() product!: ProductResponse;
  addCartIcon = 'assets/images/icons/icon-add-cart.svg';
  productWithCart!: ProductInCart;

  constructor(private shoppingCartSvc: ShoppingCartService) {}

  ngOnInit(): void {
    const product = {
      ...this.product,
      quantity: 0,
      inCart: false,
    };
    this.productWithCart = product;
  }

  ngDoCheck(): void {
    this.addCartIcon = this.productWithCart.inCart
      ? 'assets/images/icons/icon-in-cart.svg'
      : 'assets/images/icons/icon-add-cart.svg';

    this.productWithCart.inCart = false;
    this.shoppingCartSvc.getcartItems().forEach((product) => {
      if (product.id === this.productWithCart.id) {
        this.productWithCart.inCart = true;
        this.addCartIcon = 'assets/images/icons/icon-add-cart.svg';
      }
    });
  }

  addCart() {
    if (this.productWithCart.inCart) {
      this.productWithCart.inCart = false;
      this.shoppingCartSvc.removeItemCart(this.productWithCart);
      return;
    }

    this.productWithCart.inCart = !this.productWithCart.inCart;
    const product = { ...this.product, quantity: 1, inCart: true };
    this.shoppingCartSvc.addItemCart(product);
  }
}
