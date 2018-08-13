import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registrationlist/registration.component';
import { RegistrationDetailComponent } from './registrationdetail/registrationdetail.component';

const routes: Routes = [
    {
        path: '',
        component: RegistrationComponent
    },
    {
        path: 'registrationDetail/:Mode/:companyName',///:Mode/:RegistrationID
        component: RegistrationDetailComponent
    }
    ,
    {
        path: 'registration',
        component: RegistrationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegistrationRoutingModule {}
