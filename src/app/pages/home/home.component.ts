import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/core/categories/models/category.model';
import { CategoryService } from 'src/app/core/categories/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categoryList!: Category[];

  ngOnInit(): void {
    this.getCategoryList();
  }

  constructor(
    private categorySvc: CategoryService,
    private router: Router
  ) {}

  getCategoryList() {
    this.categorySvc.getAllCategories().subscribe((res) => {
      this.categoryList = res;
    });
  }

  redirectToCategory(id: number) {
    // A /search con querystring category=id
    this.router.navigate(['/search'], {
      queryParams: {
        categoryId: id,
      },
    });
  }
}
