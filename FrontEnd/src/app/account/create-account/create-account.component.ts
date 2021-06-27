import { Component, OnInit } from '@angular/core';
import Account from 'src/app/models/Account';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account: Account;

  constructor() {
    this.account = {
      name: '',
      login: {
        email: '',
        password: '',
      }
    }
  }

  ngOnInit(): void {
  }

  onSubmit (): void {

  }

}
