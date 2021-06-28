import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Login from 'src/app/models/login';
import { AccountService } from 'src/app/Services/account.service';
import { AuthGuard } from '../shared/auth.guard';


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
      token:'',
    }
  }

  ngOnInit(): void {
  }

  async onSubmit () {
    try{
      this.accountService.login(this.login)
      .then(data=> this.resolve(data))
    } catch (error) {
      console.log(error);
    }
  }

  resolve(data: Login) {
    if(data!=null)
    {
      if(data.token!=null)
      {
        localStorage.setItem('token', data.token);
        this.router.navigate(['']);
      }
      else
      {
        window.alert("Senha e/ou e-mail invalidos. Tente novamente!")
        this.router.navigate(['']);
      }
    }
    else
    {
      window.alert("Senha e/ou e-mail invalidos. Tente novamente!")
      this.router.navigate(['']);
    }
    
  }

}
