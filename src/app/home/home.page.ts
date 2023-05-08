import { Component, OnInit } from '@angular/core';
import { SongService } from './../shared/song.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  Songs: any = [];
  constructor(
    private songService: SongService
  ) {
  }
  ngOnInit() { }
  ionViewDidEnter() {
    this.songService.getSongList().subscribe((res) => {
      console.log(res)
      this.Songs = res;
    })
  }
  deleteSong(song:any, i:number) {
    if (window.confirm('Do you want to delete user?')) {
      this.songService.deleteSong(song._id)
        .subscribe(() => {
          this.Songs.splice(i, 1);
          console.log('Song deleted!')
        }
        )
    }
  }
}
