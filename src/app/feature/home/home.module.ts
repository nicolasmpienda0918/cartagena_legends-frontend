import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home.component';
import { NavigationRoute } from 'src/app/shared/constant/navigation-route.constant';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: NavigationRoute.EMPTY,
    component: HomeComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
