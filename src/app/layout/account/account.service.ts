import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
 
import { Account } from './account.model';
import { AccountList } from './accountlist.model';
 
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
export class AccountService {
  headers: Headers;
  options: RequestOptions;
  
  constructor(private http: Http, private httpClientObj: HttpClient) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  saveAccount(url: string, param: Account): Observable<Account> {
    console.log('save account');

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

  getAccountDetail(url: string, accountData: Account): Observable<Account> {
    console.log('get customer detail');
    return this.httpClientObj.post<Account>(url, accountData);
  }
  
 getAccountList(url: string, accountData: Account): Observable<AccountList> {
  console.log('get account list');
  return this.httpClientObj.post<AccountList>(url, accountData);
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
