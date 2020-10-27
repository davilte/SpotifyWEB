import { Injectable } from '@angular/core';
import { Music } from '../playlist/music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

  public musics: Music[] = [
    {
      name: "Deixa acontecer",
      artist: "Grupo revelação",
      playlistId: 4,
      path: "../../assets/audio/deixaAcontecer.mp3"
    },
    {
      name: "Sua mãe vai me amar",
      artist: "Turma do Pagode",
      playlistId: 4,
      path: "../../assets/audio/suaMaeVaiMeAmar.mp3"
    },
    {
      name: "Maquina do tempo",
      artist: "Matuê",
      playlistId: 7,
      path: "../../assets/audio/maquinaDoTempo.mp3"
    },
    {
      name: "É sal",
      artist: "Matuê",
      playlistId: 7,
      path: "../../assets/audio/eSal.mp3"
    },
    {
      name: "Cachorro caramelo",
      artist: "Lil Whind",
      playlistId: 7,
      path: "../../assets/audio/cachorroCaramelo.mp3"
    },
    {
      name: "Oh Juliana",
      artist: "Niack",
      playlistId: 9,
      path: "../../assets/audio/ohJuliana.mp3"
    },
    {
      name: "Comprei um Lança",
      artist: "Mc Jacaré",
      playlistId: 9,
      path: "../../assets/audio/compreiUmLanca.mp3"
    }
  ]

  getMusics(id: number) {
    return this.musics.filter(function (m) {
      return m.playlistId == id;
    })
  }
}
