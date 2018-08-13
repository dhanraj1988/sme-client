import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
 
import { Store } from './store.model';
import { StoreList } from './storelist.model';
 
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
export class StoreService {
  headers: Headers;
  options: RequestOptions;
  
  constructor(private http: Http, private httpClientObj: HttpClient) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  saveStock(url: string, param: Store): Observable<Store> {
    console.log('save store');

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

  getStockDetail(url: string, storeData: Store): Observable<Store> {
    console.log('get store detail');
    return this.httpClientObj.post<Store>(url, storeData);
  }
  
 getStockList(url: string, storeData: Store): Observable<StoreList> {
  console.log('get store list');
  return this.httpClientObj.post<StoreList>(url, storeData);
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
