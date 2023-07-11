import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent {
  @Input() imgSrc!: string;
  @Input() date!: string;
  @Input() title!: string;
  @Input() content!: string;
  @Input() author: string = 'John Doe';
  @Input() alt: string = 'Image';

  constructor(private sanitizer: DomSanitizer) {}

  getNatureImage() {
    const imagePath = '../../../../../assets/nature.jpg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(imagePath);
  }
}
