import { Component, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomNewsService } from '../../services/custom-news.service';
import { New } from 'src/app/models/New.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss'],
})
export class AddArticleComponent {
  addArticleForm!: FormGroup;
  customNew!: New;
  isNotificationOpened: boolean = false;
  isLoaderOpened: boolean = false;

  constructor(
    private customService: CustomNewsService,
    private renderer: Renderer2,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.addArticleForm = new FormGroup({
      category: new FormControl('business'),
      country: new FormControl('us'),
      author: new FormControl(''),
      title: new FormControl(''),
      url: new FormControl(''),
      urlToImage: new FormControl(''),
      publishedAt: new FormControl(''),
      description: new FormControl(''),
    });
  }

  goBack(): void {
    this.location.back();
  }

  handleClickOnAddArticle(): void {
    this.isLoaderOpened = true;

    setTimeout(() => {
      this.customNew = {
        category: this.addArticleForm.value.category,
        country: this.addArticleForm.value.country,
        source: {
          id: null,
          name: 'custom',
        },
        author: this.addArticleForm.value.author,
        title: this.addArticleForm.value.title,
        description: this.addArticleForm.value.description,
        url: this.addArticleForm.value.url,
        urlToImage: this.addArticleForm.value.urlToImage,
        publishedAt: this.addArticleForm.value.publishedAt,
        content: this.addArticleForm.value.description,
      };

      this.customService.addCustomNew(this.customNew);

      this.addArticleForm.reset();

      this.renderer.addClass(document.body, 'modal-opened');
      this.isNotificationOpened = true;
      this.isLoaderOpened = false;
    }, 1500);
  }
}
