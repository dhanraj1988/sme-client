import { Base } from '../../shared/models/base';

export class Supplier extends Base {
    id: number;
    suppliername: string;
    paymentmode: string;
    postalcode: number;
    town: string;
    email: string;
    phonenumber: string;
    companyname:string; 
    userid: number;
    smeid: number;
}
 