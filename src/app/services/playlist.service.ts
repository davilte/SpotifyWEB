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

  public playlists: Playlist[] = [
    {
      id: 1,
      name: 'Black History Is Now',
      img: '../../assets/images/image0.png'
    },
    {
      id: 2,
      name: 'Higher Ground',
      img: '../../assets/images/image1.png'
    },
    {
      id: 3,
      name: 'Radar',
      img: '../../assets/images/image2.png'
    },
    {
      id: 4,
      name: 'Samba & Pagode',
      img: '../../assets/images/image3.png'
    },
    {
      id: 5,
      name: 'Bem-estar',
      img: '../../assets/images/image4.png'
    },
    {
      id: 6,
      name: 'Em Casa',
      img: '../../assets/images/image5.png'
    },
    {
      id: 7,
      name: 'Brasil',
      img: '../../assets/images/image6.png'
    },
    {
      id: 8,
      name: 'Sertanejo',
      img: '../../assets/images/image7.png'
    },
    {
      id: 9,
      name: 'Funk',
      img: '../../assets/images/image8.png'
    },
    {
      id: 10,
      name: 'Pop',
      img: '../../assets/images/image9.png',
    },
  ]

  list() {
    return this.playlists
  }

  getPlaylist(id) {
    return this.playlists[id];
  }

  newPlaylist(playlist, playlistsOLD) {
      let playlists = playlistsOLD

      playlists.push(playlist);
      console.log(playlists);

      const path = environment.baseURL + 'users/' + localStorage.getItem('userId')

      return this.http.patch(path, { personalPlaylists: playlists })
 
  }

  getPlaylists() {
    const path = environment.baseURL + 'users/' + localStorage.getItem('userId')

    return this.http.get(path)
  }
}
