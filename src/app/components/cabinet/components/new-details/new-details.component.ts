import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.scss'],
})
export class NewDetailsComponent {
  @Input() imgSrc!: string;
  @Input() date!: string;
  @Input() title!: string;
  @Input() content!: string;
  @Input() author: string = 'John Doe';
  @Input() alt: string = 'Image';

  constructor() {}
}
