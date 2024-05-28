import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { PessoaUsuaria } from '../Types/Type';
import { AutenticationService } from './autentication.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = new BehaviorSubject<PessoaUsuaria | null>(null);

  decodificarJwt() {
    const token = this.autentication.retornarToken();
    const user = jwtDecode(token) as PessoaUsuaria;
    this.user.next(user);
  }

  retornarUser() {
    return this.user.asObservable();
  }

  salvarToken(token: string) {
    this.autentication.salvarTokent(token);
    this.decodificarJwt();
  }

  logout() {
    this.autentication.excluirToken();
    this.user.next(null);
  }

  estaLogado() {
    return this.autentication.possuiToken();
  }

  constructor(private autentication: AutenticationService) {
    if (this.autentication.possuiToken()) {
      this.decodificarJwt();
    }
  }
}
