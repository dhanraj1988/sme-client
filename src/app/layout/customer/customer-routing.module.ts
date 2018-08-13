import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customerlist/customerlist.component';
import { CustomerDetailComponent } from './customerdetail/customerdetail.component';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  {
    path: 'customerDetail/:Mode/:id', 
    component: CustomerDetailComponent
}
,
{
    path: 'customerlist',
    component: CustomerListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
