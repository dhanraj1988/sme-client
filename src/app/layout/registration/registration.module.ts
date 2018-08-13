import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule, DataTableModule, MessagesModule } from 'primeng/primeng';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registrationlist/registration.component';
import { PageHeaderModule } from '../../shared';
import { RegistrationDetailComponent } from './registrationdetail/registrationdetail.component';

@NgModule({
    imports: [CommonModule
        , FormsModule, DialogModule, DataTableModule
        , MessagesModule, RegistrationRoutingModule, PageHeaderModule],
    declarations: [RegistrationComponent, RegistrationDetailComponent]
})
export class RegistrationModule {}
