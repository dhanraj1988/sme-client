import { Component, OnInit } from '@angular/core';
import { Account } from '../account.model';
import { AccountList } from '../accountlist.model';
import { AccountService } from '../account.service';

@Component({
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.scss'],
  providers : [AccountService]
})
export class AccountListComponent implements OnInit {

  accountData: Account;
  accountList: AccountList; 
  accountArry: Account[] = new Array(); 

  constructor( private accountService: AccountService) {
    this.accountData = new Account();
   }

  ngOnInit() {
    this.accountData.suppliertype = 'Local';
    this.searchAccount(this.accountData);
    //this.accountArry.push(<Account>{ userid: 1, companyname: 'GreenTea', suppliertype : 'local', suppliername: 'John smith', accountname: 'Savings', accountnumber: '1223' });
  }

  
  searchAccount(accountData: Account): void {
    console.log('Account list');
    const url = '';
    this.accountService.getAccountList(url, accountData).subscribe(result => {
      this.accountList = result;
    });
    
}

reset(accountData: Account): void {
    this.accountData = new Account();
}

}
