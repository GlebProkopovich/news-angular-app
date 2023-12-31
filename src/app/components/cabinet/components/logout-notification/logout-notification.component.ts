import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  logoutNotificationSelector,
  toggleLogoutNotification,
} from 'src/app/reducers/logoutNotification';

@Component({
  selector: 'app-logout-notification',
  templateUrl: './logout-notification.component.html',
  styleUrls: ['./logout-notification.component.scss'],
})
export class LogoutNotificationComponent {
  logoutNotificationSubscription!: Subscription;
  isLogoutNotificationOpened$ = this.store.select(logoutNotificationSelector);

  constructor(
    private store: Store,
    private router: Router,
    private renderer: Renderer2
  ) {}

  handleClickOnContinue(): void {
    this.renderer.removeClass(document.body, 'modal-opened');
    this.router.navigate(['/login']);
    this.store.dispatch(toggleLogoutNotification());
  }
}
