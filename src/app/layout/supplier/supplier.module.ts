import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierListComponent } from './supplierlist/supplierlist.component';
import { SupplierDetailComponent } from './supplierdetail/supplierdetail.component';
import { PageHeaderModule } from '../../shared';
import { DialogModule, DataTableModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule , FormsModule
    , SupplierRoutingModule
    , DialogModule, DataTableModule  , PageHeaderModule
  ],
  declarations: [SupplierListComponent,SupplierDetailComponent]
})
export class SupplierModule { }
