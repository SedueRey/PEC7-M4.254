import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WineRoutingModule } from './wine-routing.module';

import { WineNewComponent } from './wine-new/wine-new.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { WineItemComponent } from './wine-item/wine-item.component';


@NgModule({
  declarations: [
    WineNewComponent,
    WineListComponent,
    WineDetailComponent,
    WineItemComponent
  ],
  imports: [
    WineRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class WineModule { }
