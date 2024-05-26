import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Depoimentos } from '../Types/Type';

@Injectable({
  providedIn: 'root',
})
export class DepoimentosService {
  constructor(private httpClient: HttpClient) {}
  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<Depoimentos[]>;

  private requestDepoimentos(): Observable<Depoimentos[]> {
    return this.httpClient.get<Depoimentos[]>(`${this.apiUrl}/depoimentos`);
  }

  listar(): Observable<Depoimentos[]> {
    if (!this.cache$)
      this.cache$ = this.requestDepoimentos().pipe(shareReplay(1));

    return this.cache$;
  }
}
