import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UnidadeFederativa } from 'src/app/Core/Types/Type';
import { FormularioService } from 'src/app/Core/services/formulario.service';
import { FormValidations } from 'src/app/shared/form-base/form-validations';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss'],
})
export class FormBaseComponent {
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(
    null,
    Validators.required
  );

  @Input() perfilComponent: boolean = false;
  @Input() titulo: string = 'Crie Sua Conta';
  @Input() textoBotao: string = 'Cadastrar';
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>();
  @Output() sair: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) {}

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: ['', [Validators.required]],
      cidade: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: ['', Validators.required],
      estado: this.estadoControl,
      confirmarEmail: [
        '',
        [
          Validators.required,
          Validators.email,
          FormValidations.equalTo('email'),
        ],
      ],
      confirmarSenha: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          FormValidations.equalTo('senha'),
        ],
      ],
      aceitarTermos: [false, [Validators.requiredTrue]],
    });

    if (this.perfilComponent) {
      this.cadastroForm.get('aceitarTermos')?.setValidators(null);
    } else {
      this.cadastroForm
        .get('aceitarTermos')
        ?.setValidators([Validators.requiredTrue]);
    }

    this.cadastroForm.get('aceitarTermos')?.updateValueAndValidity();
    this.formularioService.setCadastro(this.cadastroForm);
  }

  executarAcao() {
    this.acaoClique.emit();
  }

  deslogar() {
    this.sair.emit();
  }
}
