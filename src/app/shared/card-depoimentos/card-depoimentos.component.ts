import { Component, OnInit } from '@angular/core';
import { Depoimentos } from 'src/app/Core/Types/Type';
import { DepoimentosService } from 'src/app/Core/services/depoimentos.service';
@Component({
  selector: 'app-card-depoimentos',
  templateUrl: './card-depoimentos.component.html',
  styleUrls: ['./card-depoimentos.component.scss'],
})
export class CardDepoimentosComponent implements OnInit {
  depoimentos!: Depoimentos[];
  constructor(private depoimentoService: DepoimentosService) {}
  ngOnInit(): void {
    this.depoimentoService.listar().subscribe((res) => {
      this.depoimentos = res;
    });
  }
}
