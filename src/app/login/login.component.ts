import { LoginService } from './login.service';
import { LoginModel } from './login.type';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  hide = true

  login:string

  senha:string

  constructor(
    private _loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logar(){

    this._loginService.logar({
      login: this.login,
      senha: this.senha
    }).subscribe( logou => {

      if(logou){
        this.router.navigate(['/empresas'])
      }

    })

  }

}
