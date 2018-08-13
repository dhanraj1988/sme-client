import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'primeng/primeng';

import { AccountRoutingModule } from './account-routing.module';
import { PageHeaderModule } from '../../shared';
import { AccountListComponent } from './accountlist/accountlist.component';
import { AccountDetailComponent } from './accountdetail/accountdetail.component'; 

@NgModule({
  imports: [
    CommonModule , AccountRoutingModule , PageHeaderModule, DataTableModule
     , FormsModule  
  ],
  declarations: [AccountListComponent, AccountDetailComponent] 
   
})
export class AccountModule { }
