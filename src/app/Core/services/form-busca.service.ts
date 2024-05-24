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
    });
  }
}
