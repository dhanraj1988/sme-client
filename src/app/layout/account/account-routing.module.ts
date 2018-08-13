import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './accountlist/accountlist.component'; 
import { AccountDetailComponent } from './accountdetail/accountdetail.component'; 

const routes: Routes = [
  { path: '', component: AccountListComponent },
  {
    path: 'accountDetail/:Mode/:id', 
    component: AccountDetailComponent
},
{ path: 'account', component: AccountListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
