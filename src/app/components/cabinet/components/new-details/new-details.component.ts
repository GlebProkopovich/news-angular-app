import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewDetails } from 'src/app/models/NewDetails.interface';
import { Location } from '@angular/common';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.scss'],
})
export class NewDetailsComponent {
  currentUrl!: string;
  newDetails!: NewDetails;
  commentText: string = '';
  comments!: string[];

  constructor(
    private router: Router,
    private location: Location,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {
    this.currentUrl = decodeURIComponent(this.router.url);
    this.getNew(this.currentUrl);
    this.comments = this.newDetails.comments;
    console.log(this.comments);
  }

  ngOnChange(): void {
    const title = this.currentUrl.slice(14);
    const news = localStorage.getItem(title);
    if (news) {
      this.comments = JSON.parse(news).comments;
    }
  }

  goBack(): void {
    this.location.back();
  }

  getNew(currentUrl: string): void {
    const title = currentUrl.slice(14);
    const news = localStorage.getItem(title);
    if (news) {
      this.newDetails = JSON.parse(news);
    }
  }

  handleClickOnSend(title: string, text: string): void {
    this.commentsService.sendComment(title, text);
    this.comments.push(text);
    this.commentText = '';
  }
}
