import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FilterModel } from './models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http: HttpClient) { }

  getFilters(): Observable<FilterModel> {
    const url = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776';

    return this.http.get<FilterModel>(url);
  }
}
