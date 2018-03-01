import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';

// Import all other components here
const APP_ROUTES: Routes = [
  { path : '' , component: LoginComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component: RegisterComponent},
  { path : 'user/:uid', component: ProfileComponent}
  ];
// so on

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
