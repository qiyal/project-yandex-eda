import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './components/pages/sign-in/sign-in.component';
import {SignUpComponent} from './components/pages/sign-up/sign-up.component';
import {HomeComponent} from './components/pages/home/home.component';
import {ProfilePageGuard} from './guard/profile-page.guard';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'restaurant/:id',
    loadChildren: () => import('./modules/restaurant/restaurant.module').then(m => m.RestaurantModule)
  },
  {
    path: 'me',
    canActivate: [ProfilePageGuard],
    loadChildren: () => import('./modules/me/me.module').then(m => m.MeModule)
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  // {
  //   path: 'me',
  //   redirectTo: '/me/personal-info',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
