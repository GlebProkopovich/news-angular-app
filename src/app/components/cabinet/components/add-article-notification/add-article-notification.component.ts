import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-add-article-notification',
  templateUrl: './add-article-notification.component.html',
  styleUrls: ['./add-article-notification.component.scss'],
})
export class AddArticleNotificationComponent {
  constructor(private renderer: Renderer2) {}

  handleClickOnContinue(): void {
    this.renderer.removeClass(document.body, 'modal-opened');
  }
}
