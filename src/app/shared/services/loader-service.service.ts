import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { HttpClientData } from '../../httpInterceptor/http-client-data';

@Injectable({
  providedIn: 'root'
})

export class LoaderService {
  private static loader_count = 0;
  public requestArray: Array<string>;
  public onSuccess: Subject<HttpClientData>;
  public onError: Subject<HttpClientData>;
  public onRequest: Subject<HttpClientData>;
  public onResponseSuccess: Subject<HttpResponse<any>>;
  public onResponseError: Subject<HttpErrorResponse>;

  constructor() {
    this.onSuccess = new Subject<HttpClientData>();
    this.onError = new Subject<HttpClientData>();
    this.onRequest = new Subject<HttpClientData>();
    this.onResponseSuccess = new Subject<HttpResponse<any>>();
    this.onResponseError = new Subject<HttpErrorResponse>();
    this.requestArray = new Array<string>();

  }

  set LoaderCount(value: number) {
    LoaderService.loader_count += value;
  }

  get LoaderCount(): number {
    return LoaderService.loader_count;
  }

  pushRequest(url: string) : void{
     this.requestArray.push(url);
  }

  getRequest() : Array<string> {
    return this.requestArray;
  } 

  removeRequest(url: string): void {
    this.requestArray.splice(this.requestArray.indexOf(url));
  } 
}
