import { Component, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { toggleLogoutNotification } from 'src/app/reducers/logoutNotification';
import { mainLoaderSelector } from 'src/app/reducers/mainLoader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoaderOpened: boolean = false;
  isMainLoaderOpened$ = this.store.select(mainLoaderSelector);

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private store: Store,
    private renderer: Renderer2
  ) {}

  getLogoChronicle(): SafeResourceUrl {
    const imagePath = '../../../../../assets/logoChronicle.png';
    return this.sanitizer.bypassSecurityTrustResourceUrl(imagePath);
  }

  handleClickOnLogo(): void {
    this.router.navigate(['/cabinet/news']);
  }

  handleClickOnLogout(): void {
    this.isLoaderOpened = true;
    setTimeout(() => {
      this.isLoaderOpened = false;
      this.renderer.addClass(document.body, 'modal-opened');
      localStorage.removeItem('token');
      localStorage.removeItem('userContent');
      this.store.dispatch(toggleLogoutNotification());
    }, 1500);
  }
}
