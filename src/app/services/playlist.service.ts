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

  getPlaylistByName(name) {
    const path = environment.baseURL + 'personalPlaylists?name=' + name

    return this.http.get(path)
  }

  getPlaylist(id) {

    const path = environment.baseURL + 'playlists/' + id

    return this.http.get(path)
  }

  newPlaylist(playlist) {
    console.log(playlist);
    
    const path = environment.baseURL + 'personalPlaylists'
    
    return this.http.post(path, playlist)
  }

  getPublicPlaylists() {
    const path = environment.baseURL + 'playlists'

    return this.http.get(path)
  }

  //Personal
  getPlaylists() {
    const path = environment.baseURL + 'personalPlaylists?userId=' + localStorage.getItem('userId')
    return this.http.get(path)
  }
}
