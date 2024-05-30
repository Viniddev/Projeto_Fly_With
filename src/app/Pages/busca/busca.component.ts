import { Component, OnInit } from '@angular/core';
import { FormBuscaService } from 'src/app/Core/services/form-busca.service';
import { PassagensService } from 'src/app/Core/services/passagens.service';
import { DadosBusca, Passagem } from 'src/app/Core/Types/Type';
@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'],
})
export class BuscaComponent implements OnInit {
  passagens: Passagem[] = [];
  constructor(
    private passagensService: PassagensService,
    private formbusca: FormBuscaService
  ) {}

  ngOnInit(): void {
    const buscaPadrao = {
      data: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    };

    const busca = this.formbusca.formEstaValido
      ? this.formbusca.obterDadosBusca()
      : buscaPadrao;

    this.passagensService.getPassagens(busca).subscribe((res) => {
      console.log(busca);
      console.log(res);
      this.passagens = res.resultado;
    });
  }

  buscar(ev: DadosBusca) {
    this.passagensService.getPassagens(ev).subscribe((res) => {
      console.log(res);
      this.passagens = res.resultado;
    });
  }
}
