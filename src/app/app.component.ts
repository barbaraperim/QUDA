import { Component } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { FilterService } from './services/FilterService/filter.service';
import { StandardFilterModel } from './services/FilterService/models/filter.model';
import { SpotifyService } from './services/SpotifyService/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'QUDA';
  filters: StandardFilterModel[];
  public filterFormGroup: FormGroup;
  playlists;

  constructor(private filterService: FilterService, private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.filterService.getFilters().subscribe((res) => {
      this.filters = res.filters;
      
      let group = {
        name: new FormControl()
      };

      this.filters.forEach((filter)=>{
        group[filter.id] = new FormControl('');
      });

      this.filterFormGroup = new FormGroup(group);
    });

    this.spotifyService.searchPlaylist().subscribe((res) => {
      this.playlists = res.body.playlists.items;
      console.log(this.playlists);
      
    });
  }
}
