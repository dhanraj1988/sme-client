import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Supplier } from '../supplier.model';
import { SupplierService } from '../supplier.service';
import { ActivatedRoute  } from '@angular/router';

@Component({
  templateUrl: './supplierdetail.component.html',
  styleUrls: ['./supplierdetail.component.scss'],
  animations: [routerTransition()],
  providers: [SupplierService]
})
export class SupplierDetailComponent implements OnInit {

  supplierData: Supplier;
  test: any;
  display: boolean;
  supplierID: number;
  mode: string;
  

  constructor(private supplierService: SupplierService,
    private route: ActivatedRoute) {
    this.supplierData = new Supplier();
 
    this.display = false;

    this.test = this.route.params.subscribe(params => {
      this.supplierID = +params['id'];
      this.mode = params['Mode'];
      console.log(this.supplierID);
    });

  }

  ngOnInit() {
    if (this.mode == 'Add') {

    }
    else {
      this.supplierData.id = this.supplierID;
      this.getSupplierDetail(this.supplierData);
    }
  }

  saveSupplier(supplierDataObj: Supplier): void {
    console.log('Supplier save');
    const url = 'http://localhost:8080/user/addsupplier';
    supplierDataObj.smeid = 1001;
       this.supplierService.saveSupplier(url, supplierDataObj).subscribe(result => {
         this.supplierData = result;
         this.display = true;
       });
  }

  getSupplierDetail(supplierDataObj: Supplier): void {
    console.log('get supplier detail');
    const url = '';
    this.supplierService.getSupplierDetail(url, supplierDataObj).subscribe(result => {
      this.supplierData = result;
      this.supplierData.mode = 'Edit';
      this.supplierData.smeid = 1001;
    });

  }

  reset(supplierDataObj: Supplier): void {
    this.supplierData = new Supplier();
    this.supplierData.smeid = 1001;
  }

}
