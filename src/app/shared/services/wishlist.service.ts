import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private showWishlist$ = new BehaviorSubject<boolean>(false);
  getShowWishlist() {
    return this.showWishlist$.asObservable();
  }
  setShowWishlist(value: boolean) {
    this.showWishlist$.next(value);
  }
}
