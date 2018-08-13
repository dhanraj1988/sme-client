import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpUserEvent, HttpProgressEvent
    , HttpHeaderResponse, HttpHeaders, HttpRequest, HttpResponse
    , HttpSentEvent, HttpErrorResponse, HttpEvent,
    HttpHandler
} from '@angular/common/http';

import { Observable, observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { HttpClientData } from './http-client-data';
import { LoaderService } from '../shared/services/loader-service.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable({
    providedIn: 'root'
})

export class LoadHttpRequestInterceptor implements HttpInterceptor {

    constructor(public loaderService: LoaderService) {
        console.log('http request initialized');
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse
        | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

        console.log('calliing request:' + req.url);

        this.loaderService.LoaderCount += 1;
        this.loaderService.pushRequest(req.url);
        console.log('Request NUmber' + this.loaderService.LoaderCount + 'started');

        this.loaderService.onRequest.next(HttpClientData.getClientData(this.loaderService.getRequest(), req));

        return next.handle(req).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                const res = <HttpResponse<any>>event;

                console.log('Resquest Number' + this.loaderService.LoaderCount + 'success');

                if (this.loaderService.LoaderCount > 0) {
                    this.loaderService.LoaderCount -= 1;
                }
                this.loaderService.removeRequest(res.url);

                try {
                    this.loaderService.onSuccess.next(HttpClientData.getClientData(this.loaderService.getRequest(),null, res));
                    this.loaderService.onResponseSuccess.next(res);
                }
                catch (err) {
                    console.log('Error notifying subcribers');
                }
            }
        },
            (err: any) => {
                console.log('Request Number' + this.loaderService.LoaderCount + 'error');
                if (this.loaderService.LoaderCount > 0) {
                    this.loaderService.LoaderCount -= 1;
                }
                try {
                    this.loaderService.removeRequest(err.url);
                    this.loaderService.onError.next(HttpClientData.getClientData(this.loaderService.getRequest(), null,err));
                    this.loaderService.onResponseError.next(err);
                }
                catch (err) {
                    console.log('Error nofying subscriber');
                }
            }).catch(response => {
                if (response instanceof HttpErrorResponse) {
                    const res = <HttpErrorResponse>response;

                    if (res.status === 401 || res.status === 403) {
                        console.log('401 || 403 error');
                    }
                }
                return Observable.throw(response);
            });
    }
}
