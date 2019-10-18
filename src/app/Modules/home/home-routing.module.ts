import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomePageGuard } from './home-page-guard.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [HomePageGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HomeRoutingModule { }
