import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { Routing } from './app.routing';
import { ProfileComponent } from './components/user/profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UserService} from './services/user.service.client';
import {GameService} from './services/game.service.client';
import {RoomService} from './services/room.service.client';
import {PlayerService} from './services/player.service.client';
import {CardService} from './services/card.service.client';
import {HttpClientModule} from '@angular/common/http';
import { GameNewComponent } from './components/game/game-new/game-new.component';
import { GamePlayComponent } from './components/game/game-play/game-play.component';
import { GameStatsComponent } from './components/game/game-stats/game-stats.component';
import { HomepageComponent } from './components/user/homepage/homepage.component';
import { HowToPlayComponent } from './components/game/how-to-play/how-to-play.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    GameNewComponent,
    GamePlayComponent,
    GameStatsComponent,
    HomepageComponent,
    HowToPlayComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UserService, GameService, RoomService, PlayerService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
