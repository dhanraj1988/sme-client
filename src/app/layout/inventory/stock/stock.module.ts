import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StockRoutingModule } from './stock-routing.module';
import { StockListComponent } from './stocklist/stocklist.component';
import { StockDetailComponent } from './stockdetail/stockdetail.component';
import { DialogModule, DataTableModule } from 'primeng/primeng';
import { PageHeaderModule } from '../../../shared';

@NgModule({
  imports: [
    CommonModule,PageHeaderModule,FormsModule
    ,StockRoutingModule, DialogModule, DataTableModule
  ],
  declarations: [StockListComponent, StockDetailComponent]
})
export class StockModule { }
