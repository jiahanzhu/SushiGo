import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {GameNewComponent} from './components/game/game-new/game-new.component';
import {GamePlayComponent} from './components/game/game-play/game-play.component';
import {GameStatsComponent} from './components/game/game-stats/game-stats.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user/:userId', component: ProfileComponent },
    { path: 'user/:userId/game', component: GameNewComponent },
    { path: 'user/:userId/game/:gameId', component: GamePlayComponent },
    { path: 'user/:userId/game/:gameId/stats', component: GameStatsComponent },
    { path: '**', component: LoginComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);

