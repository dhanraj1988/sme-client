import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockListComponent } from './stocklist/stocklist.component';
import { StockDetailComponent } from './stockdetail/stockdetail.component';

const routes: Routes = [
  {
    path: '',
    component: StockListComponent
},
{
    path: 'stockDetail/:Mode/:id', 
    component: StockDetailComponent
}
,
{
    path: 'stock',
    component: StockListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
