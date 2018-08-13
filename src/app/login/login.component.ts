import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Login } from './login.model';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    display: boolean;
    login: Login;

    constructor(public router: Router
        , private loginService: LoginService
    ) {
        this.login = new Login();
    }

    ngOnInit() {
        this.display = false;
        this.login.logintype = 'SME Admin';
    }

    onLoggedin(login: Login): void {
        localStorage.setItem('isLoggedin', 'true');
        const url = 'http://localhost:8080/user/logincustomer';

        console.log(this.login.userName);
        //this.router.navigate(['dashboard']);
        //this.display = true;
        if (this.login.userName === undefined || this.login.password === undefined) {
            this.display = true;
        } else if (this.login.userName !== '' || this.login.password !== '') {
            this.loginService.login(url, login).subscribe(result => {
                if (result.valid) {
                    this.display = false;
                    localStorage.setItem('loggedUserName', this.login.userName);
                    this.router.navigate(['dashboard']);
                } else {
                    this.display = true;
                }
            });
        }
    }
}
