import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customerlist/customerlist.component';
import { CustomerDetailComponent } from './customerdetail/customerdetail.component';
import { DialogModule, DataTableModule } from 'primeng/primeng';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,PageHeaderModule,FormsModule
    ,CustomerRoutingModule, DialogModule, DataTableModule
  ],
  declarations: [CustomerListComponent,CustomerDetailComponent]
})
export class CustomerModule { }
