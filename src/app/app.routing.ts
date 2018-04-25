import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {GameNewComponent} from './components/game/game-new/game-new.component';
import {GamePlayComponent} from './components/game/game-play/game-play.component';
import {GameStatsComponent} from './components/game/game-stats/game-stats.component';
import {HomepageComponent} from './components/user/homepage/homepage.component';
import {HowToPlayComponent} from './components/game/how-to-play/how-to-play.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user/:username', component: HomepageComponent },
    { path: 'user/:username/profile', component: ProfileComponent },
    { path: 'how-to-play', component: HowToPlayComponent },
    { path: 'user/:username/game', component: GameNewComponent },
    { path: 'room/:roomId', component: GamePlayComponent },
    { path: 'user/:username/game/:gameId/stats', component: GameStatsComponent },
    { path: '**', component: LoginComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);

