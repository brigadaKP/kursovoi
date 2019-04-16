import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindComponent } from './components/find/find.component';
import { HomeComponent } from './components/home/home.component';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PlaylistPageComponent } from './components/pages/playlist-page/playlist-page.component';
import { AuthorizationComponent } from './components/pages/authorization/authorization.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'find', component: FindComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'playlist-page', component: PlaylistPageComponent},
  { path: 'login', component: AuthorizationComponent},
  { path: 'registration', component: RegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
