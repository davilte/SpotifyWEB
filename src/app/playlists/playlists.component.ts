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
    music_ids: []
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
      this.personalPlaylists = res.personalPlaylists
      console.log(this.personalPlaylists);
      
    })
  }


  newPlaylist() {
    this.playlistService.getPlaylists().subscribe((res: any) => {
      this.playlistService.newPlaylist(this.playlist, res.personalPlaylists).subscribe((response) => {
        console.log(response);
        this.getPersonalPlaylists();
      }, (error) => {
        console.log(error);
      })
    })
  }

}
