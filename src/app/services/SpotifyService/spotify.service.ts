import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  SPOTIFY_AUTH = '';

  constructor(private http: HttpClient) { }

  getToken(): Observable<any>  {
    const url = 'https://accounts.spotify.com/api/token';
    const grant_type = 'client_credentials';
    const body = `grant_type=${grant_type}`;

    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${this.SPOTIFY_AUTH}`)
      .set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(url, body, { headers, observe: 'response' });
  }

  searchPlaylist(): Observable<any> {
    const url = 'https://api.spotify.com/v1/browse/featured-playlists';
    const params = {country: 'SE', limit: '2'}; 

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('spotify_token')}`);

    return this.http
      .get(url, { headers, observe: 'response', params }).pipe(
            catchError((err) => {                
                if (err.status === 401 && err.error.error.message === "The access token expired"){
                    this.getToken().subscribe((res) => {
                        localStorage.setItem('spotify_token', res.body['access_token']);
                    });
                }                
                throw err;
            })
        );
  }
}
