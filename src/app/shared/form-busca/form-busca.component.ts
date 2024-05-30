import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuscaService } from 'src/app/Core/services/form-busca.service';
@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
})
export class FormBuscaComponent {
  @Output() realizarBusca = new EventEmitter();
  @Input() emitirBusca!: boolean;

  constructor(
    public formBuscaService: FormBuscaService,
    private httpclient: HttpClient,
    private router: Router
  ) {}

  buscar() {
    if (this.emitirBusca) {
      if (this.formBuscaService.formEstaValido) {
        const formBuscaValue = this.formBuscaService.obterDadosBusca();
        this.realizarBusca.emit(formBuscaValue);
      } else {
        const formBuscaValue = this.formBuscaService.formgroup.value;
        alert('o form precisa ser preenchido corretamente');
      }
    } else {
      this.router.navigate(['/busca']);
    }
  }
}
