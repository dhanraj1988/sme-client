import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierListComponent } from './supplierlist/supplierlist.component';
import { SupplierDetailComponent } from './supplierdetail/supplierdetail.component';

const routes: Routes = [
  { path: '', component: SupplierListComponent },
  {
    path: 'supplierDetail/:Mode/:id', 
    component: SupplierDetailComponent
}
,
{
    path: 'supplier',
    component: SupplierListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
