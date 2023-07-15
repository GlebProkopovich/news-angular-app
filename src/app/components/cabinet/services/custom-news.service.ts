import { Injectable } from '@angular/core';
import { New } from 'src/app/models/New.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomNewsService {
  constructor() {}

  addCustomNew(customNew: New): void {
    const unparsedNews = localStorage.getItem('customNews');

    if (unparsedNews) {
      const customNews = JSON.parse(unparsedNews);
      localStorage.setItem(
        'customNews',
        JSON.stringify([...customNews, customNew])
      );
    } else {
      localStorage.setItem('customNews', JSON.stringify([customNew]));
    }
  }
}
