import { Component, Input } from '@angular/core';
import { SearchHistoryService } from '../../services/search-history.service';

@Component({
  selector: 'shared-searched-tag',
  template: `
    <div class="tag-container">
      <div class="tag">
        <span class="tag-text"> {{ word | titlecase }} </span>
      </div>
      <button class="tag-delete" (click)="deleteWord(word)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <path
            d="M7.18031 7.18L0.820312 0.819998"
            stroke="#C8DEB3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="bevel"
          />
          <path
            d="M7.18031 0.819998L0.820312 7.18"
            stroke="#C8DEB3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="bevel"
          />
        </svg>
      </button>
    </div>
  `,
  styles: [
    `
      .tag-container {
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--c-2-a, #6a983c);
        font-family: Poppins, sans-serif;
        padding: 0 0.5rem;
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 1.125rem;
        border-radius: 0.75rem;
        background: var(--c-2-e, #f4f8ec);
      }

      .tag-delete {
        border: none;
        outline: none;
        background: none;
        cursor: pointer;
      }
    `,
  ],
})
export class SearchedTagComponent {
  @Input() tags: string[] = [];
  @Input() word = '';

  constructor(private searchHistorySvc: SearchHistoryService) {}

  deleteWord(word: string): void {
    this.searchHistorySvc.deleteWord(word);
  }
}
