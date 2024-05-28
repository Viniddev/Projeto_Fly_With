import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/Core/services/cadastro.service';
import { FormularioService } from 'src/app/Core/services/formulario.service';
import { PessoaUsuaria } from 'src/app/Core/Types/Type';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {

  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService,
    private router: Router
  ) {}

  cadastrar() {
    const formCadastro = this.formularioService.getCadastro();

    if (formCadastro?.valid) {
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;

      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso', value);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log('Erro ao realizar cadastro', err);
        },
      });
    }
  }
}
