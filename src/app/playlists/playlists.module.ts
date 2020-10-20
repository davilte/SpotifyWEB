import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlaylistsComponent } from './playlists.component';

@NgModule({
    declarations: [
        PlaylistsComponent,
    ],
    imports: [
        PlaylistsComponent,
        CommonModule
    ]
  })
  export class PlaylistsModule { }