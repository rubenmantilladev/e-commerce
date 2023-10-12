import { Component, Input } from '@angular/core';

@Component({
  selector: 'produtc-details-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() images!: string[];

  currentIndex = 0;

  prevSlide() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length;
    }
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = -1;
    }
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
