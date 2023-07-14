import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewDetails } from 'src/app/models/NewDetails.interface';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent {
  @Input() imgSrc!: string;
  @Input() date!: string;
  @Input() title!: string;
  @Input() content!: string;
  @Input() author: string = 'John Doe';
  @Input() alt: string = 'Image';
  @Input() newName!: string;
  @Input() newUrl!: string;

  newDetails: NewDetails = {
    imgSrc: '',
    date: '',
    title: '',
    content: '',
    author: '',
    alt: '',
    name: '',
    url: '',
    comments: [],
  };

  route!: string;

  constructor(private router: Router) {}

  ngOnChanges(): void {
    this.newDetails.imgSrc = this.imgSrc;
    this.newDetails.date = this.date;
    this.newDetails.title = this.title;
    this.newDetails.content = this.content;
    this.newDetails.author = this.author;
    this.newDetails.alt = this.alt;
    this.newDetails.name = this.newName;
    this.newDetails.url = this.newUrl;
  }

  getDetails(): void {
    this.route = `${this.title.split(' ').splice(0, 4).join('-')}...`;
    this.router.navigate([`/cabinet/news/${this.route}`]);
    const unparsedNews = localStorage.getItem('news');

    if (unparsedNews) {
      const news = JSON.parse(unparsedNews);
      const matchingNews = news.filter((newDetails: NewDetails) =>
        newDetails.title.includes(this.title)
      );

      if (matchingNews.length === 0) {
        localStorage.setItem(
          'news',
          JSON.stringify([...news, this.newDetails])
        );
      }
    } else {
      localStorage.setItem('news', JSON.stringify([this.newDetails]));
    }
  }
}
