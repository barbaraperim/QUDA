import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlists-list',
  templateUrl: './playlists-list.component.html',
  styleUrls: ['./playlists-list.component.scss']
})
export class PlaylistsListComponent implements OnInit {

  @Input() playlists;

  constructor() { }

  ngOnInit() {
    
  }

}
