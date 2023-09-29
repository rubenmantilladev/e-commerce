import { Injectable } from '@angular/core';
import { NotifyService } from './notify.service';

@Injectable({ providedIn: 'root' })
export class SearchHistoryService {
  private _searchHistory: string[] = [];

  constructor(private notifySvc: NotifyService) {}

  get searchHistory(): string[] {
    return [...this._searchHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._searchHistory.includes(tag)) {
      this._searchHistory = this._searchHistory.filter((t) => t !== tag);
    }
    this._searchHistory.unshift(tag);
    this._searchHistory = this._searchHistory.splice(0, 12);
  }

  searchWord(word: string): void {
    if (word.length === 0) {
      this.notifySvc.warning('Debes escribir una palabra', '', 800);
      return;
    }
    this.organizeHistory(word);
  }

  deleteWord(word: string): void {
    this._searchHistory = this._searchHistory.includes(word)
      ? this._searchHistory.filter((t) => t !== word)
      : this._searchHistory;

    this.notifySvc.success('Se ha eliminado la palabra', '', 600);
  }
}
