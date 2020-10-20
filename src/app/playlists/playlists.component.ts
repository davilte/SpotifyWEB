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
  constructor(
    private router: Router,
    private playlistService: PlaylistService
  ) {}
          
  
  playlists: Playlist[] = []

  ngOnInit(): void {
    this.playlists = this.playlistService.list()
    console.log(this.playlists);
    
  }

  nav(i) {
    console.log(i);
  }

}
