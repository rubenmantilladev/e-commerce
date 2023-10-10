import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { SearchHistoryService } from '../../services/search-history.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/core/categories/models/category.model';
import { CategoryService } from 'src/app/core/categories/services/category.service';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  categoryList!: Category[];

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  @ViewChild('txtCategorySelect')
  public selectValue!: ElementRef<HTMLInputElement>;

  constructor(
    private searchHistorySvc: SearchHistoryService,
    private categorySvc: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList() {
    this.categorySvc.getAllCategories().subscribe((res) => {
      this.categoryList = res;
    });
  }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    const newCategory = this.selectValue.nativeElement.value;
    console.log(newCategory);

    this.searchHistorySvc.searchWord(newTag);
    this.router.navigate(['/search'], {
      queryParams: { q: newTag, categoryId: newCategory },
    });
    this.tagInput.nativeElement.value = '';
  }
}
