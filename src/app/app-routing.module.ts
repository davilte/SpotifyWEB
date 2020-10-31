import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Body1Component } from './body1/body1.component';
import { LoginComponent } from './login/login.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { RegisterComponent } from './register/register.component';
import { SacComponent } from './sac/sac.component';


const routes: Routes = [
  { path: 'home', component: Body1Component },
   { path: 'ajuda', component: SacComponent },
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'playlists', component: PlaylistsComponent },
   { path: 'playlist/:id', component: PlaylistComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
