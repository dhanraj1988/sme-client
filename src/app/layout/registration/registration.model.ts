import { Base } from '../../shared/models/base';

export class Registration extends Base {
    id: number;
    title: string;
    companyname: string;
    language: string;
    country: string;
    state: string;
    postalcode: number;
    city: string;
    street: string;
    housenumber: string;
    addressline1: string;
    addressline2: string;
    addressline3: string;
    suppliertype: string;
    telephone1: number;
    telephone2: number;
    faxNo: number;
    companyemail: string;
    companywebsite: string;

    username: string;
    useremail: string;
    password: string;
    retypepassword: string;
    smeid: number;
}
