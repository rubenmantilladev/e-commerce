import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'price-range-selector',
  templateUrl: './price-range-selector.component.html',
  styleUrls: ['./price-range-selector.component.scss'],
})
export class PriceRangeSelectorComponent implements AfterViewInit {
  @Input() price_min!: number;
  @Input() price_max!: number;

  @Output() priceRangeChange = new EventEmitter<[number, number]>(); // [min, max]
  updateRange() {
    if (this.price_min > this.price_max) {
      const temp = this.price_min;
      this.price_min = this.price_max;
      this.price_max = temp;
    }
    this.priceRangeChange.emit([this.price_min, this.price_max]);
  }
  @ViewChild('rangeField1') input1!: ElementRef<HTMLInputElement>;
  @ViewChild('rangeField2') input2!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    this.changeVar1();
    this.changeVar2();
  }

  changeVar1(value = 700) {
    const min = parseFloat(this.input1.nativeElement.min);
    const max = parseFloat(this.input1.nativeElement.max);
    const range = max - min;
    const progressW = ((value - min) / range) * 100 + '%';
    this.input1.nativeElement.style.setProperty('--progressW', progressW);
  }
  changeVar2(value = 2200) {
    const min = parseFloat(this.input2.nativeElement.min);
    const max = parseFloat(this.input2.nativeElement.max);
    const range = max - min;
    const progressW = ((value - min) / range) * 100 + '%';
    this.input2.nativeElement.style.setProperty('--progressW', progressW);
  }
}
