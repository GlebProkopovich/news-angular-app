import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NewsService } from '../../services/news.service';
import { New } from 'src/app/models/New.interface';

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

  constructor(
    private sanitizer: DomSanitizer,
    private newsService: NewsService
  ) {}

  getNatureImage() {
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
    const page = '1';
    const pageSize = '12';
    const country = this.selectedCountry;

    this.newsService
      .getNews(country, category, searchText, page, pageSize)
      .subscribe({
        next: (response) => (this.news = response.articles),
        error: (error) => console.log(error),
      });
  }

  ngOnInit() {
    this.makeNewsRequest();
  }
}
