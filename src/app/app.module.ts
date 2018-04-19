import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { Routing } from './app.routing';
import { ProfileComponent } from './components/user/profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UserService} from './services/user.service.client';
import {HttpClientModule} from '@angular/common/http';
import { GameNewComponent } from './components/game/game-new/game-new.component';
import { GamePlayComponent } from './components/game/game-play/game-play.component';
import {GameService} from './services/game.service.client';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    GameNewComponent,
    GamePlayComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UserService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
