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
    const path = environment.baseURL + 'users/' + localStorage.getItem('userId') 

    return this.http.get(path)
  }

  addToPlaylist(music) {
    const path = environment.baseURL + 'users/' + localStorage.getItem('userId')
    this.http.patch(path, music).subscribe((res: any) => {
      console.log('OK');
    }, (err) => {
      console.log(err);
    })
  }
}
