import { Component, Input } from '@angular/core';
import { Promocao } from 'src/app/Core/Types/Type';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss'],
})
export class CardBuscaComponent {
  @Input() promocao!: Promocao;
}
