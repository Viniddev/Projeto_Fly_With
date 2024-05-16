import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  imports:[HeaderComponent],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(){}
  title = 'FinanceProject';
}