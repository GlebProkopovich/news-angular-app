import { Component, Renderer2, ElementRef } from '@angular/core';
import { Tariff } from 'src/app/models/Tariff.inteface';
import { tariffs } from './tariffs.data';

@Component({
  selector: 'app-tariffs',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.scss'],
})
export class TariffsComponent {
  tariffs!: Tariff[];
  selectedTariff: Tariff = tariffs[0];

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.tariffs = tariffs;
    this.renderer.setStyle(document.querySelector('.main'), 'display', 'block');
  }

  ngOnDestroy(): void {
    this.renderer.setStyle(document.querySelector('.main'), 'display', 'flex');
  }

  ngAfterViewInit(): void {
    const firstTariffButton =
      this.elementRef.nativeElement.querySelector('.tariff-button');
    this.renderer.addClass(firstTariffButton, 'selected');
  }

  scrollToElement(): void {
    const headline = this.elementRef.nativeElement.querySelector('.headline');
    headline.scrollIntoView({ behaviour: 'smooth' });
  }

  handleClickOnTypeBtn(clickedBtn: any): void {
    const tariffButtons = document.querySelectorAll('.tariff-button');

    tariffButtons.forEach((button) => {
      if (button.classList.contains('selected')) {
        button.classList.remove('selected');
      }
    });

    clickedBtn.classList.add('selected');

    const tariffIndex = Array.from(tariffButtons).indexOf(clickedBtn);
    this.selectedTariff = this.tariffs[tariffIndex];
  }
}
