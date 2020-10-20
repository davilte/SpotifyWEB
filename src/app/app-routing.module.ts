import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Body1Component } from 'src/app/body1/body1.component';
import { SacComponent } from 'src/app/sac/sac.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { RegisterComponent } from './register/register.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
   { path: 'home', component: Body1Component },
   { path: 'ajuda', component: SacComponent },
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'playlists', component: PlaylistsComponent },
   { path: 'playlist', component: PlaylistComponent },
   { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
