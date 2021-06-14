import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WineNewComponent } from './wines/wine-new/wine-new.component';
import { WineListComponent } from './wines/wine-list/wine-list.component';
import { WineDetailComponent } from './wines/wine-detail/wine-detail.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wine/new', component: WineNewComponent, canActivate: [AuthGuard] },
  { path: 'wine/list', component: WineListComponent },
  { path: 'wine/:id', component: WineDetailComponent },
  { path: '**', redirectTo: '/login' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes),],
  exports: [RouterModule],
})

export class AppRoutesModule { }
