import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { DadosBusca } from '../Types/Type';
@Injectable({
  providedIn: 'root',
})
export class FormBuscaService {
  formgroup: FormGroup;
  constructor(public dialog: MatDialog) {
    const somenteIda = new FormControl(false, [Validators.required]);
    const dataVolta = new FormControl(null, [Validators.required]);

    this.formgroup = new FormGroup({
      somenteIda,
      origem: new FormControl(null, [Validators.required]),
      destino: new FormControl(null, [Validators.required]),
      tipo: new FormControl('Executiva'),
      adultos: new FormControl(2),
      criancas: new FormControl(1),
      bebes: new FormControl(0),
      dataIda: new FormControl(null, [Validators.required]),
      dataVolta,
    });

    somenteIda.valueChanges.subscribe((somenteIda) => {
      if (somenteIda) {
        dataVolta.disable();
        dataVolta.setValidators(null);
      } else {
        dataVolta.enable();
        dataVolta.setValidators([Validators.required]);
      }
      dataVolta.updateValueAndValidity;
    });
  }

  getDescricaoPassageiros(): string {
    let descricao = '';

    const adultos = this.formgroup.get('adultos')?.value;
    if (adultos && adultos > 0) {
      descricao += `${adultos} adulto${adultos > 1 ? 's' : ''}`;
    }

    const criancas = this.formgroup.get('criancas')?.value;
    if (criancas && criancas > 0) {
      descricao += `${descricao ? ', ' : ''}${criancas} criança${
        criancas > 1 ? 's' : ''
      }`;
    }

    const bebes = this.formgroup.get('bebes')?.value;
    if (bebes && bebes > 0) {
      descricao += `${descricao ? ', ' : ''}${bebes} bebê${
        bebes > 1 ? 's' : ''
      }`;
    }

    return descricao;
  }

  getDescricaoPassagens(): string {
    return this.formgroup.get('tipo')?.value;
  }

  obterControle<T>(nome: string): FormControl {
    const control = this.formgroup.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl<T>;
  }

  obterDadosBusca(): DadosBusca | null {
    const dataIdaControl = this.obterControle<Date>('dataIda');
    const dataVoltaControl = this.obterControle<Date>('dataVolta');

    const dadosBusca: DadosBusca = {
      pagina: 1,
      porPagina: 50,
      dataIda: dataIdaControl.value.toISOString(),
      passageirosAdultos: this.obterControle<number>('adultos').value,
      passageirosCriancas: this.obterControle<number>('criancas').value,
      passageirosBebes: this.obterControle<number>('bebes').value,
      tipo: this.obterControle<string>('tipo').value,
      somenteIda: this.obterControle<boolean>('somenteIda').value,
      origemId: this.obterControle<number>('origem').value.id,
      destinoId: this.obterControle<number>('destino').value.id,
    };

    if (dataVoltaControl.value) {
      dadosBusca.dataVolta = dataVoltaControl.value.toISOString();
    }

    return dadosBusca;
  }

  alterarTipo(evento: MatChipSelectionChange, tipo: string) {
    if (evento.selected) {
      this.formgroup.patchValue({
        tipo,
      });
      console.log('Tipo de passagem alterado para: ', tipo);
    }
  }

  openDialog(): void {
    this.dialog.open(ModalComponent, { width: '50%' });
  }

  get formEstaValido() {
    return this.formgroup.valid;
  }
}
