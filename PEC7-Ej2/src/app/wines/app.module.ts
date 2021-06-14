import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WineItemComponent } from './wines/wine-item/wine-item.component';
import { WineListComponent } from './wines/wine-list/wine-list.component';
import { WineNewComponent } from './wines/wine-new/wine-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WineService } from './services/wine.service';

import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { WineDetailComponentComponent } from './wine-detail-component/wine-detail-component.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WineItemComponent,
    WineListComponent,
    WineNewComponent,
    LoginComponent,
    RegisterComponent,
    WineDetailComponentComponent,
    WineDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // NgModel
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
