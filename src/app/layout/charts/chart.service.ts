import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Charts } from './chart.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient ) { }

  registration(url: string, chartdata: Charts): Observable<Charts> {
    console.log('Service');
    console.log('Service ====>',chartdata);
    //let header = HttpHeaders
    return this.http.post<Charts>(url, chartdata);
 }

}
