import { Base } from '../../../shared/models/base';

export class Stock extends Base {
    id: number;
    stockcode: string;
    stockname: string;
    unitofissue: number;
    stockcategoryname: string;
    stockcategoryid: number;
    sellingprice: number;
    recorderlevel: string;
    vatable: string;
    companyname:string;
    sicgroupid:string;
    barcode:string;
    barcodeid:string;
    description:string;
    markup:string;
    averageunitcost:number;
    unitcost:number;
    storeid:number;
    usr_id: number;
    
}
