import { Component, Input } from '@angular/core';
import { ProductResponse } from '../../models/product.model';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: ProductResponse;
  inCart = false;
  addCartIcon = 'assets/images/icons/icon-add-cart.svg';

  addCart() {
    this.inCart = !this.inCart;
    this.addCartIcon = this.inCart
      ? 'assets/images/icons/icon-in-cart.svg'
      : 'assets/images/icons/icon-add-cart.svg';

    console.log(this.inCart);
  }
}
