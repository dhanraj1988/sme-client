import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreRoutingModule } from './store-routing.module'; 
import { DialogModule, DataTableModule } from 'primeng/primeng';
import { PageHeaderModule } from '../../../shared';
import { StoreListComponent } from './storelist/storelist.component';
import { StoreDetailComponent } from './storedetail/storedetail.component';

@NgModule({
  imports: [
    CommonModule,PageHeaderModule,FormsModule
    ,StoreRoutingModule, DialogModule, DataTableModule
  ],
  declarations: [StoreListComponent, StoreDetailComponent]
})
export class StoreModule { }
