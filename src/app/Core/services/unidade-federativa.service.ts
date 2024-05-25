import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UnidadeFederativa } from '../Types/Type';

@Injectable({
  providedIn: 'root',
})
export class UnidadeFederativaService {
  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<UnidadeFederativa[]>;
  constructor(private httpCLient: HttpClient) {}

  listar(): Observable<UnidadeFederativa[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(shareReplay(1));
    }
    return this.cache$;
    //request dos estados analisando o cache do navegador, caso não tenha, realiza a req.
  }

  private requestEstados(): Observable<UnidadeFederativa[]> {
    return this.httpCLient.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`);
  }
}
