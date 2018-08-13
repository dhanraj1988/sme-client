import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Registration } from '../registration.model';
import { RegistrationList } from '../registrationlist.model';
import { RegistrationService } from '../registration.service';

@Component({
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
    animations: [routerTransition()],
    providers : [RegistrationService]
})
export class RegistrationComponent implements OnInit {

    registrationData: Registration;
    registrationList: RegistrationList; 
    registrationArry: Registration[] = new Array(); 

    constructor( private registrationService: RegistrationService) {
      this.registrationData = new Registration();
    }

    ngOnInit() {
        this.registrationData.suppliertype = 'Local';
        this.searchRegistration( this.registrationData);
        //this.registrationArry.push(<Registration>{ id: 1, companyname: 'GreenTea',country: 'India',state:'TamilNadu',city:'Chennai', username : 'John' });
    }

    searchRegistration(registrationData: Registration): void {
        console.log('Registration list');
        const url = 'http://localhost:8080/user/getCompanyDetails';
        this.registrationService.getRegistrationList(url, registrationData).subscribe(result => {
            this.registrationList = result;
        });
    }

    reset(registrationDataObj: Registration): void {
        this.registrationData = new Registration();
        this.registrationData.suppliertype = 'Local';
    }
}
