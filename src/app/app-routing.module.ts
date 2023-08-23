import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/component/home.component';
import { NavigationRoute } from './shared/constant/navigation-route.constant';
import { PageComponent } from './shared/component/page/page.component';

const routes: Routes = [
  { path: '', redirectTo: NavigationRoute.HOME, pathMatch: 'full' },
  {
    path: NavigationRoute.BOOKING,
    component: PageComponent,
    children:[
      {
        path: NavigationRoute.EMPTY,
        loadChildren: () => import('./feature/booking/booking.module').then( (m) => m.BookingModule)
      }
    ]
  },
  {
    path: NavigationRoute.HOME,
    component: HomeComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
