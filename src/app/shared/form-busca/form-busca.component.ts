import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuscaService } from 'src/app/Core/services/form-busca.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
})
export class FormBuscaComponent {
  constructor(
    public dialog: MatDialog,
    public formBuscaService: FormBuscaService
  ) {}

  openDialog(): void {
    this.dialog.open(ModalComponent, { width: '50%' });
  }
}
