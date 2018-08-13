import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Account } from '../account.model';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './accountdetail.component.html',
  styleUrls: ['./accountdetail.component.scss'],
  animations: [routerTransition()],
  providers: [AccountService]
})
export class AccountDetailComponent implements OnInit {

  accountData: Account;
  test: any;
  display: boolean;
  accountID: number;
  mode: string;


  constructor(private accountService: AccountService,
    private route: ActivatedRoute) {
    this.accountData = new Account();

    this.display = false;

    this.test = this.route.params.subscribe(params => {
      this.accountID = +params['id'];
      this.mode = params['Mode'];
      console.log(this.accountID);
    });

  }

  ngOnInit() {
    if (this.mode == 'Add') {

    }
    else {
      this.accountData.id = this.accountID;
      this.getAccountDetail(this.accountData);
    }
  }

  saveAccount(accountDataObj: Account): void {
    console.log('save account');
    const url = '';
    accountDataObj.smeid = 1001;
    this.accountService.saveAccount(url, accountDataObj).subscribe(result => {
      this.accountData = result;
      this.display = true;
    });
  }

  getAccountDetail(accountDataObj: Account): void {
    console.log('get account detail');
    const url = '';
    this.accountService.getAccountDetail(url, accountDataObj).subscribe(result => {
      this.accountData = result;
      this.accountData.mode = 'Edit';
      this.accountData.smeid = 1001;
    });

  }

  reset(customerDataObj: Account): void {
    this.accountData = new Account();
    this.accountData.smeid = 1001;
  }

}
