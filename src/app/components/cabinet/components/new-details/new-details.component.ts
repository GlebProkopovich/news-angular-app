import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewDetails } from 'src/app/models/NewDetails.interface';
import { Location } from '@angular/common';
import { CommentsService } from '../../services/comments.service';
import { NewsService } from '../../services/news.service';
import { Comment } from 'src/app/models/Comments.interface';

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.scss'],
})
export class NewDetailsComponent {
  currentUrl!: string;
  newDetails!: NewDetails | void;
  commentText: string = '';
  comments!: Comment[];
  date!: string;

  constructor(
    private router: Router,
    private location: Location,
    private commentsService: CommentsService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.currentUrl = decodeURIComponent(this.router.url);
    this.newDetails = this.newsService.getNew(this.currentUrl);
    if (this.newDetails) {
      this.comments = this.newDetails.comments.map((comment: any) => comment);
    }
  }

  goBack(): void {
    this.location.back();
  }

  handleClickOnSend(currentUrl: string, text: string): void {
    const currentDate: Date = new Date();
    this.date = this.commentsService.formatDate(currentDate);

    this.comments.push({ text: this.commentText, date: this.date });
    this.commentText = '';
    this.commentsService.sendComment(currentUrl, text);
  }
}
