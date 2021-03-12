import { Routes } from '@angular/router';

export const RootRoutes: Routes = [{ path: '', redirectTo: 'signin', pathMatch: 'full' },
{ path: 'signin', loadChildren: () => import('./pages/signin/signin.module').then(m => m.SigninModule) },
{ path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }
]