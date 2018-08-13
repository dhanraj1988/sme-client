import { Base } from '../../shared/models/base';

export class Account extends Base {
    id: number;
    companyname: string;
    suppliername: string;
    suppliertype: string;
    accountfor: string;
    customername: string;
    accountname: string;
    accountnumber: string;  
    accountcode: string;  
    startaccountperiodmonth: string;  
    userid: number;
    smeid: number;
}
