import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', loadChildren: () => import('./pages/login/login.module').then(loginModule => loginModule.LoginModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(pagesModule => pagesModule.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
