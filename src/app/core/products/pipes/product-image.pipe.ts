import { Pipe, PipeTransform } from '@angular/core';
import { ProductInCart } from '../models/product.model';

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {
  transform(product: ProductInCart): string {
    if (!product.id && !product.images[0]) {
      return 'assets/images/no-image.webp';
    }

    if (product.images[0] && product.images.length > 1) {
      return product.images[0];
    }
    return 'assets/images/no-image.webp';
  }
}
