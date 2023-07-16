import { Component, Input } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { Comment } from 'src/app/models/Comments.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  userName!: string;

  @Input() photoSrc!: string;
  @Input() text!: string;
  @Input() index!: number;
  @Input() currentUrl!: string;
  @Input() comments!: Comment[];
  @Input() date!: string;
  @Input() newDetails!: any;

  constructor(private commentsService: CommentsService) {}

  ngOnInit() {
    const unparsedUserContent = localStorage.getItem('userContent');
    if (unparsedUserContent) {
      this.userName = JSON.parse(unparsedUserContent).name;
    }
  }

  handleClickOnCloseBtn(currentUrl: string, text: string): void {
    this.commentsService.deleteComment(currentUrl, text);

    const texts = this.comments.map((comment: Comment) => comment.text);

    const commentIndex = texts.indexOf(text);
    if (commentIndex !== -1) {
      this.comments.splice(commentIndex, 1);
    } else {
      alert('Comment not found!');
    }
  }
}
