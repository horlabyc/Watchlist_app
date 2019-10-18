import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'auth', loadChildren: () => import ('./Modules/auth/auth.module').then( m => m.AuthModule)},
  { path: 'films', loadChildren: () => import ('./Modules/landing-page/landing-page.module').then( m => m.LandingPageModule)},
  { path: '', loadChildren: () => import ('./Modules/home/home.module').then(m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
