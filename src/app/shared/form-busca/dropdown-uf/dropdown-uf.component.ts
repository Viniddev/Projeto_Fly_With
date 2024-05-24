import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss'],
})
export class DropdownUfComponent implements OnInit {
  constructor() {}

  @Input() label: string = '';
  @Input() prefix: string = '';

  ngOnInit(): void {}
}
