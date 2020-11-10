import { Injectable } from '@angular/core';
import { Playlist } from '../playlists/playlists';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(
    private http: HttpClient
  ) { }

  list() {
    
  }

  getPlaylist(id) {

    const path = environment.baseURL + 'playlists/' + id

    return this.http.get(path)
  }

  newPlaylist(playlist, playlistsOLD) {
      let playlists = playlistsOLD

      playlists.push(playlist);
      console.log(playlists);

      const path = environment.baseURL + 'users/' + localStorage.getItem('userId')

      return this.http.patch(path, { personalPlaylists: playlists })
 
  }

  getPublicPlaylists() {
    const path = environment.baseURL + 'playlists'

    return this.http.get(path)
  }

  //Personal
  getPlaylists() {
    const path = environment.baseURL + 'users/' + localStorage.getItem('userId')
    return this.http.get(path)
  }
}
