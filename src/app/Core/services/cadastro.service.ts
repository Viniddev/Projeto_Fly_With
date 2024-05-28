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

  buscarCadastro(): Observable<PessoaUsuaria> {
    return this.http.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`);
  }

  editarCadastro(pessoausuaria:PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.http.patch<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`,pessoausuaria);
  }
}
