import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SacComponent } from './sac/sac.component';
import { HomeComponent } from './home/home.component';
import { Body1Component } from './body1/body1.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaylistsComponent } from './playlists/playlists.component';
import { RegisterComponent } from './register/register.component';
import { PlaylistComponent } from './playlist/playlist.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SacComponent,
    HomeComponent,
    Body1Component,
    FooterComponent,
    // PlaylistsComponent,
    // PlaylistComponent,
    // RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
