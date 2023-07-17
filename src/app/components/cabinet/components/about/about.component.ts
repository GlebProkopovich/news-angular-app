import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(document.querySelector('.main'), 'display', 'flex');
  }

  ngOnDestroy(): void {
    this.renderer.setStyle(document.querySelector('.main'), 'display', 'block');
  }
}
