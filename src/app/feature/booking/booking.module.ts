import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationRoute } from 'src/app/shared/constant/navigation-route.constant';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './component/booking.component';

const routes: Routes = [
  {
    path: NavigationRoute.EMPTY,
    component: BookingComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BookingComponent]
})
export class BookingModule { }
