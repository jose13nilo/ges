import { LoginModel } from './login.type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logar(body: LoginModel):Observable<boolean> {

    return this.http.post<boolean>("api/usuario/logar", body);

  }

}
