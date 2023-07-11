import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiNewsResponse } from 'src/app/models/New.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  API_URL: string = 'https://newsapi.org/v2/top-headlines?';
  API_KEY: string = 'be86c240e2284e34a35dc0aa02d77647';

  constructor(private http: HttpClient) {}

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
}
