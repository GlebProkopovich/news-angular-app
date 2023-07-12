import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { TariffsComponent } from './components/tariffs/tariffs.component';
import { CabinetDashboardComponent } from './components/cabinet-dashboard/cabinet-dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { NewDetailsComponent } from './components/new-details/new-details.component';

const routes: Routes = [
  {
    path: '',
    component: CabinetDashboardComponent,
    children: [
      { path: 'news', component: NewsComponent },
      { path: 'news/:name', component: NewDetailsComponent },
      { path: 'tariffs', component: TariffsComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: 'news', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabinetRoutingModule {}
