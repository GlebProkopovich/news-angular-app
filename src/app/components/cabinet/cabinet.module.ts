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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class CabinetModule {}
