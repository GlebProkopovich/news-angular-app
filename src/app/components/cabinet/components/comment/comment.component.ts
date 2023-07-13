import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  @Input() photoSrc!: string;
  @Input() nickname!: string;
  @Input() text!: string;
  @Input() date!: string;
}
