import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NewsService } from '../../services/news.service';
import { New } from 'src/app/models/New.interface';
import { PaginationInstance } from 'ngx-pagination';
import { Store } from '@ngrx/store';
import { toggleMainLoader } from 'src/app/reducers/mainLoader';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  selectedCategory: string = 'business';
  selectedCountry: string = 'us';
  searchText: string = '';
  news!: New[];
  totalAmountOfNews!: number;
  config: PaginationInstance = {
    id: 'news',
    itemsPerPage: 12,
    currentPage: 1,
  };

  constructor(
    private sanitizer: DomSanitizer,
    private newsService: NewsService,
    private store: Store
  ) {}

  getNatureImage(): SafeResourceUrl {
    const imagePath = '../../../../../assets/nature.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(imagePath);
  }

  handleCategoryChange(): void {
    this.makeNewsRequest();
  }

  handleCountryChange(): void {
    this.makeNewsRequest();
  }

  handleSearch(): void {
    this.makeNewsRequest();
  }

  makeNewsRequest(): void {
    const category = this.selectedCategory;
    const searchText = this.searchText;
    const page = String(this.config.currentPage);
    const pageSize = '12';
    const country = this.selectedCountry;

    this.store.dispatch(toggleMainLoader());

    this.newsService
      .getNews(country, category, searchText, page, pageSize)
      .subscribe({
        next: (response) => (
          (this.news = response.articles),
          (this.totalAmountOfNews = response.totalResults),
          this.store.dispatch(toggleMainLoader())
        ),
        error: (error) => (
          console.log(error), this.store.dispatch(toggleMainLoader())
        ),
      });
  }

  handlePageChange(pageNumber: number): void {
    this.config.currentPage = pageNumber;
    this.makeNewsRequest();
  }

  ngOnInit() {
    this.makeNewsRequest();
  }
}
