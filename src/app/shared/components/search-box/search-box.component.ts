import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    console.log(newTag);
  }
}
