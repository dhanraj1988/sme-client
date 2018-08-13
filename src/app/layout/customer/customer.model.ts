import { Base } from '../../shared/models/base';

export class Customer extends Base {
    id: number;
    customername: string;
    paymentmode: string;
    postalcode: number;
    town: string;
    email: string;
    phonenumber: string;
    companyname:string;
    userid: number;
    smeid: number;
}
