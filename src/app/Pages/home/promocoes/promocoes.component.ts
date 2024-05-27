import { Component, OnInit } from '@angular/core';
import { Promocao } from 'src/app/Core/Types/Type';
import { PromocaoService } from 'src/app/Core/services/promocao.service';
@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss'],
})
export class PromocoesComponent implements OnInit {
  promocoes!: Promocao[];
  constructor(private service: PromocaoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.promocoes = res;
    });
  }
}
