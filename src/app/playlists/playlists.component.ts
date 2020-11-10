import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from '../services/playlist.service';
import { Playlist } from './playlists';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  selectedPath = ""

  playlist = {
    name: '',
    description: '',
    color: '#ffffff',
    music_ids: [],
    user_id: ''
  }
  constructor(
    private router: Router,
    private playlistService: PlaylistService,
  ) {
    this.getPublicPlaylists()
    this.getPersonalPlaylists()
  }
          
  
  playlists: Playlist[] = []
  personalPlaylists;

  ngOnInit(): void { }

  nav(i) {
    console.log(i);
  }

  getPublicPlaylists() {
    this.playlistService.getPublicPlaylists().subscribe((res: any) => {
      this.playlists = res;
    })
  }

  getPersonalPlaylists() {
    this.playlistService.getPlaylists().subscribe((res: any) => {
      this.personalPlaylists = res
    })
  }


  newPlaylist() {
    this.playlist.user_id = localStorage.getItem('userId');
    this.playlistService.newPlaylist(this.playlist).subscribe(res => {
      this.getPersonalPlaylists();
    })
  }

}
