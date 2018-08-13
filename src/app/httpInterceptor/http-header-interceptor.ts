import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpUserEvent, HttpProgressEvent
  , HttpHeaderResponse, HttpHeaders, HttpRequest, HttpResponse
  , HttpSentEvent,
  HttpHandler
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpHeaderInterceptor implements HttpInterceptor {

  constructor() {
    console.log('http header initialized');
  }

  intercept(req: HttpRequest<any>, resp: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse
    | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

    let customReq: HttpRequest<any> = null;
    return resp.handle(req);

  }

}
