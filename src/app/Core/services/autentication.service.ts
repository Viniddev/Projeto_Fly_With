import { Injectable } from '@angular/core';

const key = 'token';
@Injectable({
  providedIn: 'root',
})
export class AutenticationService {
  constructor() {}

  salvarTokent(token: string) {
    return localStorage.setItem(key, token);
  }
  excluirToken() {
    localStorage.removeItem(key);
  }
  retornarToken() {
    return localStorage.getItem(key) ?? '';
  }
  possuiToken() {
    return !!this.retornarToken();
  }
}
