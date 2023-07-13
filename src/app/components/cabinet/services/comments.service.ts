import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor() {}

  sendComment(title: string, text: string) {
    let previousUnparsedValue = localStorage.getItem(title);
    if (previousUnparsedValue) {
      try {
        const previousValue = JSON.parse(previousUnparsedValue);
        localStorage.setItem(
          title,
          JSON.stringify({
            ...previousValue,
            comments: [...previousValue.comments, text],
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
  }
}
