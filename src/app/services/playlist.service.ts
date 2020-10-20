import { Injectable } from '@angular/core';
import { Playlist } from '../playlists/playlists';


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor() { }

  public playlists: Playlist[] = [
    { 
      id: 1, 
      name: '',
      img: '../../assets/images/image0.png'
    },
    { 
      id: 2, 
      name: '',
      img: '../../assets/images/image1.png'
    },
    { 
      id: 3, 
      name: '',
      img: '../../assets/images/image2.png'
    },
    { 
      id: 4, 
      name: '',
      img: '../../assets/images/image3.png'
    },
    { 
      id: 5, 
      name: '',
      img: '../../assets/images/image4.png'
    },
    { 
      id: 6, 
      name: '',
      img: '../../assets/images/image5.png'
    },
    { 
      id: 7, 
      name: '',
      img: '../../assets/images/image6.png'
    },
    { 
      id: 8, 
      name: '',
      img: '../../assets/images/image7.png'
    },
    { 
      id: 9, 
      name: '',
      img: '../../assets/images/image8.png'
    },
    { 
      id: 10, 
      name: '',
      img: '../../assets/images/image9.png'
    },
  ]

  list() {
    return this.playlists
  }
}
