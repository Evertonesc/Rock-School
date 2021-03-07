import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(pagesModule => pagesModule.LoginModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(pagesModule => pagesModule.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
