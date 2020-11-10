import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Music } from '../playlist/music';
import { Playlist } from '../playlists/playlists';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(
    private http: HttpClient
  ) { }
  
  getMusicIds(id) {
    const path = environment.baseURL + "playlists/" + id
    return this.http.get(path)
  }

  getMusics(ids) {
      let idsString = '';
      ids.forEach(id => {
        idsString += `id=${id}&`
      });
      const path = environment.baseURL + 'musics?' +idsString
      return this.http.get(path)
  }

  getPersonalMusics(playlist) {
    const path = environment.baseURL + 'personalPlaylists?name=' + playlist

    return this.http.get(path)
  }

  addToPlaylist(playlist) {
    const path = environment.baseURL + 'personalPlaylists/' + playlist.id
    console.log('path', path);
    
    return this.http.patch(path, playlist)
  }

  searchName(text) {
    const path = environment.baseURL + 'musics?name=' + text
    return this.http.get(path)
  }
  searchArtist(text) {
    const path = environment.baseURL + 'musics?artist=' + text
    return this.http.get(path)
  }
}
