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
  musics;
  noMusics = false;
  personal = false;
  playlists;

  constructor(
    private playlistService: PlaylistService,
    private musicService: MusicService
  ) {
    this.getPlaylist();
    this.getMyPlaylists();
  }

  ngOnInit(): void {
  }

  getMyPlaylists() {
    this.playlistService.getPlaylists().subscribe((res: any) => {
      console.log('adfg', res);

      this.playlists = res;
    })
  }

  getPlaylist() {

    const playlist = window.location.pathname
    this.id = playlist.substring(playlist.indexOf('playlist/') + 9);

    if (!isNaN(this.id)) {
      this.id = window.location.pathname.charAt(length + 10);
      this.musicService.getMusicIds(this.id).subscribe((res: any) => {
        this.musicService.getMusics(res.musics).subscribe((res) => {
          console.log('Playlist', res);
          this.musics = res;
        })
      })
    } else {
      this.personal = true;
      console.log(this.id);

      this.musicService.getPersonalMusics(this.id).subscribe((res: any) => {

        let musicIds = res[0].music_ids
        console.log(musicIds);


        if (musicIds.length != 0) {
          this.musicService.getMusics(musicIds).subscribe((res) => {
            this.musics = res;
          }, err => {
            console.log(err);
          })
        } else {
          this.noMusics = true;
        }

      })
    }

  }

  add(m, p) {

    console.log('music', m.id);
    console.log('playlist', p);

    let playlist = p;

    playlist.music_ids.push(m.id)
    console.log(playlist);

    this.musicService.addToPlaylist(playlist).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })
  }

  remove(music) {
    const playlistName = window.location.pathname.substring(window.location.pathname.indexOf('playlist/') + 9);
    this.playlistService.getPlaylistByName(playlistName).subscribe((res) => {
      let playlist = res[0]
      console.log(music.id, playlist);

      let i = playlist.music_ids.indexOf(music.id)
      console.log(i);

      playlist.music_ids.splice(i, 1)
      console.log(playlist);

      this.musicService.addToPlaylist(playlist).subscribe((res) => {
        console.log(res);
        this.getPlaylist();
      }, err => {
        console.log(err);
      })


    })

  }
}
