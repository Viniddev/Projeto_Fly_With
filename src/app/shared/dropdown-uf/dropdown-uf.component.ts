import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { UnidadeFederativa } from 'src/app/Core/Types/Type';
import { UnidadeFederativaService } from 'src/app/Core/services/unidade-federativa.service';
@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss'],
})
export class DropdownUfComponent implements OnInit {
  unidadesFederativas: UnidadeFederativa[] = [];
  filteredOptions$?: Observable<UnidadeFederativa[]>;
  constructor(private unidadeFederativaService: UnidadeFederativaService) {}

  myControl = new FormControl('');
  @Input() label: string = '';
  @Input() prefix: string = '';
  @Input() control!: FormControl;
  options = [];

  ngOnInit() {
    this.unidadeFederativaService.listar().subscribe((dados) => {
      this.unidadesFederativas = dados;
    });
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this.filtrarUfs(value))
    );
  }

  filtrarUfs(value: string | UnidadeFederativa): UnidadeFederativa[] {
    const nomeUf = typeof value === 'string' ? value : value?.nome;
    const valorFiltrado = nomeUf?.toLowerCase();
    const result = this.unidadesFederativas.filter((estado) =>
      estado.nome.toLowerCase().includes(valorFiltrado)
    );
    return result;
  }

  displayFn(uf: UnidadeFederativa): string {
    return uf && uf.nome ? uf.nome : '';
  }
}
