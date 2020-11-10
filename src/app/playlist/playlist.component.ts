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
      this.playlists = res.personalPlaylists;
    })
  }

  getPlaylist() {
    
    const playlist = window.location.pathname
    this.id = playlist.substring(playlist.indexOf('playlist/') + 9);
    
    if(!isNaN(this.id)) {
      this.id = window.location.pathname.charAt(length + 10);
      this.musicService.getMusicIds(this.id).subscribe((res: any) => {
        this.musicService.getMusics(res.musics).subscribe((res) => {
          this.musics = res;
        })
      })
    } else {
      this.personal = true;
      this.musicService.getPersonalMusics(this.id).subscribe((res: any) => {
        
        let playlist = res.personalPlaylists.filter(p => {
          return p.name == this.id
        });
        let musicIds = playlist[0].music_ids
        
        
        if(musicIds.length != 0) {
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

  add(music, playlist) {

    //Pego as playlists
    this.playlistService.getPlaylists().subscribe((res: any) => {

      let user = res;
      let personalPlaylist = res;

      //Pego a playlist especifica do usuário
      personalPlaylist = res.personalPlaylists.find((p) => {
        return p.name == playlist.name
      })

      //Pego o indice da playlist
      let playlistIndex = res.personalPlaylists.findIndex((p) => {
        return p.name == playlist.name
      })
      
      //Verifico se a playlist ja contem a musica
      if(personalPlaylist.music_ids.includes(music)) {
        console.log('ja tem');
      } else {

        //Adiciono o id da musica clicada no array de musicas
        personalPlaylist.music_ids.push(music)

        //Atualizo o usuário com playlist contendo a nova musica
        user.personalPlaylists[playlistIndex] = personalPlaylist;

        //Envio a requisição
        this.musicService.addToPlaylist(user)
      }
    })
  }

  remove() {
    console.log('removed');
  }
}
