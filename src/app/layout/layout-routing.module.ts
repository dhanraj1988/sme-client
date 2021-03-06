import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'registration', loadChildren: './registration/registration.module#RegistrationModule' },
            { path: 'businessconfiguration', loadChildren: './form/form.module#FormModule' },
            { path: 'supplier', loadChildren: './supplier/supplier.module#SupplierModule' },
            { path: 'customer', loadChildren: './customer/customer.module#CustomerModule' },
            { path: 'account', loadChildren: './account/account.module#AccountModule' },
            { path: 'stock', loadChildren: './inventory/stock/stock.module#StockModule' },
            { path: 'store', loadChildren: './inventory/store/store.module#StoreModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
