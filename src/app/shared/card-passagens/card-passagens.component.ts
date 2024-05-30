import { Component, Input } from '@angular/core';
import { Passagem } from 'src/app/Core/Types/Type';
@Component({
  selector: 'app-card-passagens',
  templateUrl: './card-passagens.component.html',
  styleUrls: ['./card-passagens.component.scss'],
})
export class CardPassagensComponent {
  @Input() passagem!: Passagem;
  get textoIdaVolta() {
    if (!this.passagem.dataVolta) {
      return 'Somente ida';
    }
    return 'Ida e volta';
  }
}
