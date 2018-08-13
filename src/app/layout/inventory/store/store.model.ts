import { Base } from '../../../shared/models/base';

export class Store extends Base {
    id: number;
    storenumber: string;
    storename: string;
    storelocation: string;
    active:number;
    usr_id: number;

}
