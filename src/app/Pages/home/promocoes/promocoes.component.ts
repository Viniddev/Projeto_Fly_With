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
  originalPromocoes!: Promocao[];
  constructor(private service: PromocaoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.promocoes = res;
      this.originalPromocoes = [...res];
    });
  }

  handleSortChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;
    this.onSortChange(value);
  }

  onSortChange(value: string): void {
    if (value === 'alphabetical') {
      this.sortAlphabetically();
    } else if (value === 'price') {
      this.sortByPrice();
    }
  }

  sortAlphabetically(): void {
    this.promocoes.sort((a, b) => a.destino.localeCompare(b.destino));
  }

  sortByPrice(): void {
    this.promocoes.sort((a, b) => a.preco - b.preco);
  }
}
