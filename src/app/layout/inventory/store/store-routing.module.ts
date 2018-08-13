import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreListComponent } from './storelist/storelist.component';
import { StoreDetailComponent } from './storedetail/storedetail.component';

const routes: Routes = [
  {
    path: '',
    component: StoreListComponent
},
{
    path: 'storeDetail/:Mode/:id', 
    component: StoreDetailComponent
}
,
{
    path: 'store',
    component: StoreListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
