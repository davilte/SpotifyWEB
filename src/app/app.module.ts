import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { Body1Component } from './body1/body1.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { RegisterComponent } from './register/register.component';
import { SacComponent } from './sac/sac.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    Body1Component,
    FooterComponent,
    NavComponent,
    PlaylistComponent,
    RegisterComponent,
    SacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
