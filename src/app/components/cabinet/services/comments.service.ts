import { Injectable } from '@angular/core';
import { Comment } from 'src/app/models/Comments.interface';
import { NewDetails } from 'src/app/models/NewDetails.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor() {}

  sendComment(currentUrl: string, text: string) {
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

      const currentDate: Date = new Date();
      const date = this.formatDate(currentDate);

      if (text.length > 0) {
        newDetails.comments.push({ text, date });
        localStorage.setItem('news', JSON.stringify(news));
      } else {
        alert('Write something!');
      }
    } else {
      return console.log('Invalid trying to add comment');
    }
  }

  deleteComment(currentUrl: string, text: string) {
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

      const comments = newDetails.comments;
      const texts = comments.map((comment: Comment) => comment.text);

      const commentIndex = texts.indexOf(text);
      if (commentIndex !== -1) {
        newDetails.comments.splice(commentIndex, 1);
        localStorage.setItem('news', JSON.stringify(news));
      } else {
        alert('Comment not found!');
      }
    } else {
      console.log('Invalid attempt to delete comment');
    }
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}`;
  }
}
