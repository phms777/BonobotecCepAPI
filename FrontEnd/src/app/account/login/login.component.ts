import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Login from 'src/app/models/login';
import { AccountService } from 'src/app/Services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;  
  constructor(private accountService: AccountService, private router:Router) {
    this.login = {
      email: '',
      password: '',    
    }
  }

  ngOnInit(): void {
  }

  async onSubmit () {
    try{
      const result = await this.accountService.login(this.login);
      console.log(`login-efetuado: ${result}`);
      this.router.navigate(['']);

    } catch (error) {
      console.log(error);
    }
  }

}
