import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Supplier } from '../supplier.model';
import { SupplierList } from '../supplierlist.model';
import { SupplierService } from '../supplier.service';

@Component({
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.scss'],
  animations: [routerTransition()],
  providers : [SupplierService]
})
export class SupplierListComponent implements OnInit {

  supplierData: Supplier;
  supplierList: SupplierList; 
  supplierArry: Supplier[] = new Array(); 

  constructor(private supplierService: SupplierService) { 
    this.supplierData = new Supplier();
  }

  ngOnInit() {
    this.searchSupplier( this.supplierData);
    //this.supplierArry.push(<Supplier>{ id: 1, companyname: 'GreenTea', suppliername : 'TVT', phonenumber: '1243' });
  }

  searchSupplier(supplierData: Supplier): void {
    console.log('Supplier list');
    const url = '';
    this.supplierService.getSupplierList(url, supplierData).subscribe(result => {
        this.supplierList = result;
    });
}

reset(supplierData: Supplier): void {
    this.supplierData = new Supplier();
}

}
