import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WineNewComponent } from './wine-new/wine-new.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';

import { AuthGuard } from '../guards/auth.guard';
import { WineNewDeactivateGuard } from '../guards/wine-new-deactivate.guard';

const routes: Routes = [
  {
    path: 'new',
    component: WineNewComponent,
    canActivate: [AuthGuard],
    canDeactivate: [WineNewDeactivateGuard]
  },
  { path: 'list', component: WineListComponent },
  { path: ':id', component: WineDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WineRoutingModule { }
