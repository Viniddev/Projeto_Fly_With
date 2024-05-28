import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserService } from './user.service';

interface authToken {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private apiUrl = environment.apiUrl;
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  autenticar(
    email: string,
    senha: string
  ): Observable<HttpResponse<authToken>> {
    return this.httpClient
      .post<authToken>(
        `${this.apiUrl}/auth/login`, {email, senha}, { observe:'response'})
      .pipe(
        tap((response) => {
          const authToken = response.body?.access_token || '';
          this.userService.salvarToken(authToken);
        })
      );
  }
}
