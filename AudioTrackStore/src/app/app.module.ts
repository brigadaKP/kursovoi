import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaketComponent } from './components/maket/maket.component';
import { HeaderMComponent } from './maket/header-m/header-m.component';
import { ArticleMComponent } from './maket/article-m/article-m.component';
import { NavMComponent } from './maket/nav-m/nav-m.component';
import { AsideMComponent } from './maket/aside-m/aside-m.component';
import { FooterMComponent } from './maket/footer-m/footer-m.component';
import { FindComponent } from './components/find/find.component';
import { HomeComponent } from './components/home/home.component';
import { ArcticleProfileComponent } from './components/arcticle-profile/arcticle-profile.component';
import { NavFindComponent } from './components/find/nav-find/nav-find.component';
import { ArticleFindComponent } from './components/find/article-find/article-find.component';
import { ArticleCardsComponent } from './components/cards/article-cards/article-cards.component';
import { CardsComponent } from './components/cards/cards.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ArticleSettingsComponent } from './components/settings/article-settings/article-settings.component';
import { from } from 'rxjs';
import { StarabilitySlotComponent } from './components/starability-slot/starability-slot.component';
import { PlaylistPageComponent } from './components/pages/playlist-page/playlist-page.component';
import { AuthorizationComponent } from './components/pages/authorization/authorization.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { MenuComponent } from './components/adminHome/menu/menu.component';
import { CreatPlaylistComponent } from './components/creat-playlist/creat-playlist.component';
import { CreatPlaylistPageComponent } from './components/pages/creat-playlist-page/creat-playlist-page.component';
import { PageForMenuItemsComponent } from './components/pages/page-for-menu-items/page-for-menu-items.component';
import { UsersListComponent } from './components/pages/users-list/users-list.component';
import { UsersItemComponent } from './components/pages/page-for-menu-items/users-item/users-item.component';
import { AddTrackItemComponent } from './components/pages/page-for-menu-items/add-track-item/add-track-item.component';
import { AddMusicianItemComponent } from './components/pages/page-for-menu-items/add-musician-item/add-musician-item.component';
import { AddAlbumItemComponent } from './components/pages/page-for-menu-items/add-album-item/add-album-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MaketComponent,
    HeaderMComponent,
    ArticleMComponent,
    NavMComponent,
    AsideMComponent,
    FooterMComponent,
    FindComponent,
    HomeComponent,
    ArcticleProfileComponent,
    NavFindComponent,
    ArticleFindComponent,
    ArticleCardsComponent,
    CardsComponent,
    SettingsComponent,
    ArticleSettingsComponent,
    StarabilitySlotComponent,
    PlaylistPageComponent,
    AuthorizationComponent,
    ToolbarComponent,
    RegistrationComponent,
    AdminHomeComponent,
    MenuComponent,
    CreatPlaylistComponent,
    CreatPlaylistPageComponent,
    PageForMenuItemsComponent,
    UsersListComponent,
    UsersItemComponent,
    AddTrackItemComponent,
    AddMusicianItemComponent,
    AddAlbumItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


