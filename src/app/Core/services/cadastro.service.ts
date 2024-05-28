import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { PessoaUsuaria } from '../Types/Type';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  cadastrar(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.http.post<PessoaUsuaria>(`${this.apiUrl}/auth/cadastro`, pessoaUsuaria);
  }

  buscarCadastro(token: string): Observable<PessoaUsuaria> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`, {headers});
  }

  editarCadastro(token: string, pessoausuaria:PessoaUsuaria): Observable<PessoaUsuaria> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    console.log(headers)
    console.log(`${this.apiUrl}/auth/perfil`, pessoausuaria, { headers });

    return this.http.patch<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`,pessoausuaria, {headers});
  }
}
