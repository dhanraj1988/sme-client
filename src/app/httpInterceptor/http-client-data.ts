import { HttpRequest, HttpResponse } from '@angular/common/http';

export class HttpClientData {

    request?: HttpRequest<any>;
    response?: HttpResponse<any>;
    reqArry: Array<string>;


    public static getClientData(reqArry: Array<string>, request?: HttpRequest<any>,
        response?: HttpResponse<any>) {
        const clientData = new HttpClientData();
        clientData.reqArry = reqArry;

        if (request) {
            clientData.request = request;
        }

        if (response) {
            clientData.response = response;
        }
        return clientData;
    }

}
