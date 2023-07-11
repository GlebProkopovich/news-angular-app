import { Injectable } from '@angular/core';
import { Observable, of, switchMap, throwError, timer } from 'rxjs';
import { UserInfo } from '../models/UserInfo.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuth(): boolean {
    return this.getToken() !== null;
  }

  login(userInfo: UserInfo): Observable<string | boolean> {
    if (
      userInfo.email === 'admin@gmail.com' &&
      userInfo.password === 'admin12345'
    ) {
      return timer(1500).pipe(
        switchMap(() => {
          this.setToken('gjsdgs21jjbyh234nvn511slllnbtu');
          return of(true);
        })
      );
    } else {
      return timer(1500).pipe(
        switchMap(() =>
          throwError(() => new Error('Incorrect email or password'))
        )
      );
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userContent');
    this.router.navigate(['/login']);
  }
}
