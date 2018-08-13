import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

import { Customer } from '../customer.model';
import { CustomerList } from '../customerlist.model';
import { CustomerService } from '../customer.service';


@Component({
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss'],
  animations: [routerTransition()],
  providers : [CustomerService]
})
export class CustomerListComponent implements OnInit {

  customerData: Customer;
  customerList: CustomerList; 
  customerArry: Customer[] = new Array(); 

  constructor(private customerService: CustomerService) { 
    this.customerData = new Customer();
  }

  ngOnInit() {
    this.searchCustomer( this.customerData);
    //this.customerArry.push(<Customer>{ id: 1, companyname: 'GreenTea', customername : 'Customer 1', phonenumber: '1243' });
  }

  searchCustomer(customerData: Customer): void {
    console.log('Supplier list');
    const url = '';
    this.customerService.getCustomerList(url, customerData).subscribe(result => {
        this.customerList = result;
    });
}

reset(customerData: Customer): void {
    this.customerData = new Customer();
}
}
