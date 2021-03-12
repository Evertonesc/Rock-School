import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootRoutes } from './routes';

const routes: Routes = RootRoutes;
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }