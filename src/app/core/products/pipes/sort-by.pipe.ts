import { Pipe, PipeTransform } from '@angular/core';
import { ProductResponse } from 'src/app/core/products/models/product.model';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(
    value: ProductResponse[],
    sortBy: keyof ProductResponse | ''
  ): ProductResponse[] {
    switch (sortBy) {
      case 'price':
        return value.sort((a, b) => a.price - b.price);
      case 'title':
        return value.sort((a, b) => (a.title > b.title ? 1 : -1));
      case 'category':
        return value.sort((a, b) =>
          a.category.name > b.category.name ? 1 : -1
        );
      default:
        return value;
    }
  }
}
