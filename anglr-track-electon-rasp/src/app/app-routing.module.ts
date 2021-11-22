import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { AddRouteComponent } from './page/add-route/add-route.component';
import { TrackComponent } from './page/track/track.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'addRoute', component: AddRouteComponent, canActivate: [AuthGuard]},
  {path: 'trackBus', component: TrackComponent, canActivate: [AuthGuard]},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
