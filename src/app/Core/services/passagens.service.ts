import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Resultado } from '../Types/Type';
@Injectable({
  providedIn: 'root',
})
export class PassagensService {
  apiurl: string = environment.apiUrl;
  constructor(private httpclient: HttpClient) {}

  getPassagens(search: any): Observable<Resultado> {
    const params = search;

    console.log('params: ' + params);
    return this.httpclient.get<Resultado>(`${this.apiurl}/passagem/search`, {
      params,
    });
  }
}
