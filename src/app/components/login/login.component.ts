import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  loginWindowSelector,
  toggleLoginWindow,
} from 'src/app/reducers/loginWindow';
import {
  loginNotificationSelector,
  toggleLoginNotification,
} from 'src/app/reducers/loginNotification';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  isLoggedIn!: boolean;
  isLoaderOpened: boolean = false;
  loginNotificationSubscription!: Subscription;
  loginSubscription!: Subscription;
  isLoginNotificationOpened$ = this.store.select(loginNotificationSelector);
  isLoginOpened$ = this.store.select(loginWindowSelector);

  constructor(
    private authService: AuthService,
    private store: Store,
    private router: Router
  ) {}

  submitLogin(): void {
    this.isLoaderOpened = true;
    this.loginSubscription = this.authService
      .login(this.loginForm.value)
      .subscribe({
        next: (response: boolean | string) => {
          if (response === true) {
            this.isLoaderOpened = false;
            this.isLoggedIn = true;
            this.store.dispatch(toggleLoginNotification());
            this.store.dispatch(toggleLoginWindow());
            localStorage.setItem(
              'userContent',
              JSON.stringify({
                name: 'Admin',
                email: this.loginForm.value.email,
              })
            );
            this.loginForm.reset();
          }
        },
        error: (error) => {
          this.isLoaderOpened = false;
          this.isLoggedIn = false;
          this.store.dispatch(toggleLoginNotification());
          this.store.dispatch(toggleLoginWindow());
          this.loginForm.reset();
          console.log(error);
        },
      });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      ]),
    });

    this.authService.isAuth() && this.router.navigate(['/cabinet']);
  }

  ngOnDestroy(): void {
    this.loginNotificationSubscription &&
      this.loginNotificationSubscription.unsubscribe();
    this.loginSubscription && this.loginSubscription.unsubscribe();
  }
}
