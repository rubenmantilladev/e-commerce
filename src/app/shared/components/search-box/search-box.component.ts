import { Component, ViewChild, ElementRef } from '@angular/core';
import { SearchHistoryService } from '../../services/search-history.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(
    private searchHistorySvc: SearchHistoryService,
    private router: Router
  ) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.searchHistorySvc.searchWord(newTag);
    this.router.navigate(['/search'], {
      queryParams: { q: newTag },
    });
    this.tagInput.nativeElement.value = '';
  }
}
