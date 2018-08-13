import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Registration } from '../registration.model';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './registrationdetail.component.html',
  styleUrls: ['./registrationdetail.component.scss'],
  animations: [routerTransition()],
  providers: [RegistrationService]
})
export class RegistrationDetailComponent implements OnInit {

  registrationData: Registration;
  test: any;
  display: boolean;
  companyName: string;
  mode: string;
  msgs: any = [];
  message: string;
  header: string;

  constructor(private registrationService: RegistrationService,
    private route: ActivatedRoute) {
    this.registrationData = new Registration();
    this.display = false;

    this.test = this.route.params.subscribe(params => {
      this.companyName = params['companyname'];
      this.mode = params['Mode'];
      console.log(this.companyName);
    });

    this.registrationData.companyname = this.companyName;
  }

  ngOnInit() {
    this.registrationData.title = 'Mr';
    this.registrationData.language = 'EN';
    this.registrationData.country = 'US';
    this.registrationData.state = 'Texas';
    this.registrationData.suppliertype = 'Local';
    this.registrationData.companyemail = '';
    this.registrationData.password = '';

    if (this.mode == 'Add') {
      this.registrationData.companyname = '';
    }
    else {
      this.getRegistrationDetail(this.registrationData);
    }

  }

  saveRegistration(registrationData: Registration): void {
    console.log('save Registration');
    const url = 'http://localhost:8080/user/postcustomer';
    registrationData.smeid = 1001;
    if (registrationData.companyemail.length == 0 || registrationData.password.length == 0 || registrationData.companyname.length == 0) 
    {  
      this.header = 'Info';
      this.message = 'Please fill mandatory fields';
      this.display = true;
    }
    else {
      this.registrationService.saveregistration(url, registrationData).subscribe(result => {
        this.registrationData = result;
        this.header = 'Confirmation';
        this.message = 'Registered Successfully !.';
        this.display = true;
      });
    }
  }

  getRegistrationDetail(registrationData: Registration): void {
    console.log('Registration detail');
    const url = 'http://localhost:8080/user/getCompanyDetails';
    this.registrationService.getRegistrationDetail(url, registrationData).subscribe(result => {
      this.registrationData = result;
      this.registrationData.mode = 'Edit';
      this.registrationData.smeid = 1001;
    });

  }

  reset(chartData: Registration): void {
    this.registrationData = new Registration();
    this.registrationData.title = 'Mr';
    this.registrationData.language = 'EN';
    this.registrationData.country = 'US';
    this.registrationData.state = 'Texas';
    this.registrationData.suppliertype = 'Local';
    this.registrationData.companyemail = '';
    this.registrationData.password = '';
    this.registrationData.companyname = '';
    this.registrationData.smeid = 1001;
  }
}
