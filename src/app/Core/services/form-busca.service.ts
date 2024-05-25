import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormBuscaService {
  formgroup: FormGroup;
  constructor() {
    this.formgroup = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
    });
  }

  obterControle(nome: string): FormControl {
    const control = this.formgroup.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }
}
formBusca: FormGroup;
