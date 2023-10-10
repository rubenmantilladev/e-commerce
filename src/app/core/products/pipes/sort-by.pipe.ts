import { Pipe, PipeTransform } from '@angular/core';
import { ProductResponse } from 'src/app/core/products/models/product.model';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(
    value: ProductResponse[],
    sortBy: keyof ProductResponse | '',
    order: 'asc' | 'desc' = 'asc'
  ): ProductResponse[] {
    switch (sortBy) {
      case 'price':
        if (order === 'desc') {
          return value.sort((a, b) => b.price - a.price);
        }
        return value.sort((a, b) => a.price - b.price);
      case 'title':
        if (order === 'desc') {
          return value.sort((a, b) => (b.title > a.title ? 1 : -1));
        }
        return value.sort((a, b) => (a.title > b.title ? 1 : -1));
      case 'category':
        if (order === 'desc') {
          return value.sort((a, b) =>
            b.category.name > a.category.name ? 1 : -1
          );
        }
        return value.sort((a, b) =>
          a.category.name > b.category.name ? 1 : -1
        );
      default:
        return value;
    }
  }
}
