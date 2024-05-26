import { Component, Input } from '@angular/core';
import { Depoimentos } from 'src/app/Core/Types/Type';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss'],
})
export class DepoimentosComponent {
  @Input() depoimentos!: Depoimentos;
}
