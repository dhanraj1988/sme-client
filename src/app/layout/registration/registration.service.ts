import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Registration } from './registration.model';
import { RegistrationList } from './registrationlist.model';

import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http, private httpClientObj: HttpClient) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  saveregistration(url: string, param: Registration): Observable<Registration> {
    console.log('save registration');

    let params: URLSearchParams = new URLSearchParams();
    for (var key in param) {
      if (param.hasOwnProperty(key)) {
        let val = param[key];
        params.set(key, val);
      }
    }
    this.options = new RequestOptions({ headers: this.headers, search: params });
    console.log(this.options);
    return this.http.get(url, this.options).map(this.extractData).catch(this.handleError);

  }

  getRegistrationList(url: string, registrationData: Registration): Observable<RegistrationList> {
    console.log('get registration list');
    return this.httpClientObj.post<RegistrationList>(url, registrationData).map(res => res).catch(this.handleError);
  }

  getRegistrationDetail(url: string, registrationData: Registration): Observable<Registration> {
    console.log('get registration detail');
    return this.httpClientObj.post<Registration>(url, registrationData).map(res => res).catch(this.handleError);
  }

  private extractData(res: Response | any) {
    let body = res.json();
    return body;
  }

  private handleError(error: Response | any) {
    console.log(error.message || error);
    return Observable.throw(error.message || error);
  }

}


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { Observable } from 'rxjs';
// import { Registration } from './registration.model';
// import { RegistrationList } from './registrationlist.model';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

// @Injectable({
//   providedIn: 'root'
// })
// export class RegistrationService {

//   constructor(private http: HttpClient ) { }

//   saveregistration(url: string, registrationData: Registration): Observable<Registration> {
//     console.log('save registration');
//     return this.http.post<Registration>(url, registrationData).map(res=>res).catch(this.handleError);
//  }

//  getRegistrationList(url: string, registrationData: Registration): Observable<RegistrationList> {
//   console.log('get registration list');
//   return this.http.post<RegistrationList>(url, registrationData).map(res=>res).catch(this.handleError);
// }

// getRegistrationDetail(url: string, registrationData: Registration): Observable<Registration> {
//   console.log('get registration detail');
//   return this.http.post<Registration>(url, registrationData).map(res=>res).catch(this.handleError);
// }

// private extractData(res: Response | any ) {
// 	let body = res.json();
//         return body;
//     }

//  private handleError (error: Response | any) {
// 	console.error(error.message || error);
// 	return Observable.throw(error.message || error);
//     }

// }
