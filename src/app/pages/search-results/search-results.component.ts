import { Component } from '@angular/core';
import { SearchHistoryService } from 'src/app/shared/services/search-history.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  price_min!: number;
  price_max!: number;

  constructor(private searchHistorySvc: SearchHistoryService) {}

  get listWords() {
    return this.searchHistorySvc.searchHistory;
  }

  handlePriceRangeChange($event: [number, number]) {
    this.price_min = $event[0];
    this.price_max = $event[1];
  }
}
