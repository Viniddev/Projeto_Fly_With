import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaUsuaria } from 'src/app/Core/Types/Type';
import { AutenticationService } from 'src/app/Core/services/autentication.service';
import { CadastroService } from 'src/app/Core/services/cadastro.service';
import { FormularioService } from 'src/app/Core/services/formulario.service';
import { UserService } from 'src/app/Core/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  token: string = '';
  nome: string = '';
  cadastro!: PessoaUsuaria;

  titulo: string = 'Olá, ';
  textoBotao: string = 'Atualizar';
  perfilComponent: boolean = true;
  form!: FormGroup<any> | null;

  constructor(
    private tokenservice: AutenticationService,
    private cadastroservice: CadastroService,
    private formularioservice: FormularioService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token = this.tokenservice.retornarToken();

    console.log(this.token);

    this.cadastroservice.buscarCadastro().subscribe((cad) => {
      this.cadastro = cad;
      this.nome = cad.nome;
      this.carregarFormulario();
    });
  }
  atualizar() {
    const dadosAtualizados = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      genero: this.form?.value.genero,
      cidade: this.form?.value.cidade,
      estado: this.form?.value.estado,
    };

    this.cadastroservice.editarCadastro(dadosAtualizados).subscribe({
      next: () => {
        alert('Cadastro editado com sucesso');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deslogar() {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  carregarFormulario() {
    this.form = this.formularioservice.getCadastro();
    this.form?.patchValue({
      nome: this.cadastro.nome,
      nascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      cidade: this.cadastro.cidade,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      genero: this.cadastro.genero,
      telefone: this.cadastro.telefone,
      estado: this.cadastro.estado,
    });
  }
}
