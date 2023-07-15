import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { toggleLoginWindow } from 'src/app/reducers/loginWindow';
import { toggleLoginNotification } from 'src/app/reducers/loginNotification';
import { UserContent } from 'src/app/models/UserContent.interface';

@Component({
  selector: 'app-notification',
  templateUrl: './login-notification.component.html',
  styleUrls: ['./login-notification.component.scss'],
})
export class LoginNotificationComponent {
  userContent!: UserContent;

  @Input() text!: string;
  @Input() buttonLink!: string;
  @Input() buttonText!: string;
  @Input() isLoggedIn!: boolean;
  @Input() userName!: string;
  @Input() userEmail!: string;

  constructor(private store: Store, private router: Router) {
    this.isLoggedIn = true;
    this.userName = 'User';
    this.userEmail = 'user@gmail.com';
  }

  ngOnInit() {
    const storedContent = localStorage.getItem('userContent');
    this.userContent = storedContent ? JSON.parse(storedContent) : null;
    this.userName = this.userContent?.name;
    this.userEmail = this.userContent?.email;
  }

  handleSuccessfulLogin(): void {
    this.router.navigate(['/cabinet']);
    setTimeout(() => {
      this.store.dispatch(toggleLoginWindow());
      this.store.dispatch(toggleLoginNotification());
    }, 2000);
  }

  handleInvalidLogin(): void {
    this.store.dispatch(toggleLoginNotification());
    this.store.dispatch(toggleLoginWindow());
  }
}
