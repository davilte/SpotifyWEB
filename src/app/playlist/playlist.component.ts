import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  id;
  playlist;
  musics;

  constructor(
    private playlistService: PlaylistService,
    private musicService: MusicService
  ) { 
    this.getPlaylist();
  }

  ngOnInit(): void {
  }

  getPlaylist() {
    this.id = window.location.pathname.charAt(length + 10);
    this.playlist = this.playlistService.getPlaylist(this.id -1)
    this.musics = this.musicService.getMusics(this.id);
    console.log(this.playlist);
    console.log(this.musics);
    
  }
}
