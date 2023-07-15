import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetRoutingModule } from './cabinet-routing.module';
import { TariffsComponent } from './components/tariffs/tariffs.component';
import { NewsComponent } from './components/news/news.component';
import { NewComponent } from './components/new/new.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CabinetDashboardComponent } from './components/cabinet-dashboard/cabinet-dashboard.component';
import { LogoutNotificationComponent } from './components/logout-notification/logout-notification.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AboutComponent } from './components/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewDetailsComponent } from './components/new-details/new-details.component';
import { CommentComponent } from './components/comment/comment.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { AddArticleNotificationComponent } from './components/add-article-notification/add-article-notification.component';

@NgModule({
  declarations: [
    NewsComponent,
    TariffsComponent,
    NewsComponent,
    NewComponent,
    HeaderComponent,
    FooterComponent,
    CabinetDashboardComponent,
    LogoutNotificationComponent,
    AboutComponent,
    NewDetailsComponent,
    CommentComponent,
    AddArticleComponent,
    AddArticleNotificationComponent,
  ],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
})
export class CabinetModule {}
