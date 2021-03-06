import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WineService } from './services/wine.service';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';

import { AppRoutesModule } from './app-routes.module';

import { AuthGuard } from './guards/auth.guard';
import { WineNewDeactivateGuard } from './guards/wine-new-deactivate.guard';

import { WineItemComponent } from './wines/wine-item/wine-item.component';
import { WineListComponent } from './wines/wine-list/wine-list.component';
import { WineNewComponent } from './wines/wine-new/wine-new.component';
import { WineDetailComponent } from './wines/wine-detail/wine-detail.component';

import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    WineItemComponent,
    WineListComponent,
    WineNewComponent,
    WineDetailComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // NgModel
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutesModule
  ],
  providers: [
    WineService,
    UserService,
    UserStoreService,
    AuthGuard,
    WineNewDeactivateGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
