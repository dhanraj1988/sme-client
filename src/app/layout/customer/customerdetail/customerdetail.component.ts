import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.scss'],
  animations: [routerTransition()],
  providers: [CustomerService]
})
export class CustomerDetailComponent implements OnInit {

  customerData: Customer;
  test: any;
  display: boolean;
  customerID: number;
  mode: string;

  constructor(private customerService: CustomerService,
    private route: ActivatedRoute) {

    this.customerData = new Customer();
    this.display = false;

    this.test = this.route.params.subscribe(params => {
      this.customerID = +params['id'];
      this.mode = params['Mode'];
      console.log(this.customerID);
    });
  }

  ngOnInit() {
    if (this.mode == 'Add') {

    }
    else {
      this.customerData.id = this.customerID;
      this.getCustomerDetail(this.customerData);
    }
  }

  saveCustomer(customerDataObj: Customer): void {
    console.log('save customer');
    const url = '';
    customerDataObj.smeid = 1001;
    this.customerService.saveCustomer(url, customerDataObj).subscribe(result => {
      this.customerData = result;
      this.display = true;
    });
  }

  getCustomerDetail(customerDataObj: Customer): void {
    console.log('get customer detail');
    const url = '';
    this.customerService.getCustomerDetail(url, customerDataObj).subscribe(result => {
      this.customerData = result;
      this.customerData.mode = 'Edit';
      this.customerData.smeid = 1001;
    });

  }

  reset(customerDataObj: Customer): void {
    this.customerData = new Customer();
    this.customerData.smeid = 1001;
  }

}
