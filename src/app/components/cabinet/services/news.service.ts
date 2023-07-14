import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiNewsResponse } from 'src/app/models/New.interface';
import { NewDetails } from 'src/app/models/NewDetails.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  API_URL: string = 'https://newsapi.org/v2/top-headlines?';
  API_KEY: string = 'be86c240e2284e34a35dc0aa02d77647';

  constructor(private http: HttpClient, private router: Router) {}

  getNews(
    country: string,
    category: string,
    searchText: string,
    page: string,
    pageSize: string
  ): Observable<ApiNewsResponse> {
    const url = `${this.API_URL}&country=${country}&category=${category}&q=${searchText}&page=${page}&pageSize=${pageSize}&apiKey=${this.API_KEY}`;
    return this.http.get<ApiNewsResponse>(url);
  }

  getNew(currentUrl: string): NewDetails | void {
    const unparsedNews = localStorage.getItem('news');
    if (unparsedNews) {
      const news = JSON.parse(unparsedNews);

      const newDetails = news.filter((newDetails: NewDetails) =>
        newDetails.title
          .split(' ')
          .map((substring) => substring.replace('-', ' '))
          .join(' ')
          .includes(currentUrl.slice(14).slice(0, -3).split('-').join(' '))
      )[0];
      return newDetails;
    } else {
      this.router.navigate(['/not-found']);
    }
  }
}
