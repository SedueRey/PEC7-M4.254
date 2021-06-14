import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  // { path: 'wine', loadChildren: 'wines/wine.module#WineModule' },
  { path: 'wine', loadChildren: () => import('./wines/wine.module').then(m => m.WineModule) },
  // { path: 'user', loadChildren: 'user/user.module#UserModule' },
  { path: 'user', loadChildren: () => import( './user/user.module').then(m => m.UserModule) },
  { path: '**', redirectTo: '/user/login' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})

export class AppRoutesModule { }
