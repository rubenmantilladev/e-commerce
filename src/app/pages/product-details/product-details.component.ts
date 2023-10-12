import { ProductInCart } from './../../core/products/models/product.model';
import { ProductService } from 'src/app/core/products/services/product.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product!: ProductInCart;
  id!: number;

  constructor(
    private productSvc: ProductService,
    private shoppingCartSvc: ShoppingCartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Recuperar el id del producto de la URL
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.getProduct(this.id);
  }

  getProduct(id: number) {
    this.productSvc.getProductById(id).subscribe((product) => {
      const productInCart = {
        ...product,
        quantity: 1,
      };

      this.product = productInCart;
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

  addToCart() {
    this.shoppingCartSvc.addItemCart(this.product);
  }
}
